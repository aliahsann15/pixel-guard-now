import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import UploadDropzone from './UploadDropzone';
import PreviewCard from './PreviewCard';
import ControlsPanel, { CompressionSettings } from './ControlsPanel';
import { loadImageData, downloadBlob } from '@/utils/imageUtils';
import type { ProcessImageMessage, ProcessImageResponse } from '@/workers/imageProcessor.worker';

const ToolUI = () => {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string>('');
  const [compressedUrl, setCompressedUrl] = useState<string>('');
  const [compressedBlob, setCompressedBlob] = useState<Blob | null>(null);
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 });
  const [compressedDimensions, setCompressedDimensions] = useState({ width: 0, height: 0 });
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [settings, setSettings] = useState<CompressionSettings>({
    quality: 80,
    format: 'original',
    targetWidth: 0,
    targetHeight: 0,
    maintainAspectRatio: true,
  });

  const workerRef = useRef<Worker | null>(null);
  const { toast } = useToast();

  const handleFileSelect = useCallback(async (file: File) => {
    try {
      // Clean up previous URLs
      if (originalUrl) URL.revokeObjectURL(originalUrl);
      if (compressedUrl) URL.revokeObjectURL(compressedUrl);

      setOriginalFile(file);
      setOriginalSize(file.size);
      
      const url = URL.createObjectURL(file);
      setOriginalUrl(url);

      // Load image to get dimensions
      const img = new Image();
      img.onload = () => {
        setOriginalDimensions({ width: img.naturalWidth, height: img.naturalHeight });
        setSettings(prev => ({
          ...prev,
          targetWidth: img.naturalWidth,
          targetHeight: img.naturalHeight,
        }));
      };
      img.src = url;

      // Reset compressed state
      setCompressedUrl('');
      setCompressedBlob(null);
      setCompressedSize(0);

      toast({
        title: 'Image ready to optimize',
        description: 'Choose quality, format, and size, then preview your compressed image',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load image',
        variant: 'destructive',
      });
    }
  }, [originalUrl, compressedUrl, toast]);

  const processImage = useCallback(async () => {
    if (!originalFile) return;

    try {
      setIsProcessing(true);
      setProgress(0);

      // Create worker if it doesn't exist
      if (!workerRef.current) {
        workerRef.current = new Worker(
          new URL('../workers/imageProcessor.worker.ts', import.meta.url),
          { type: 'module' }
        );
      }

      const worker = workerRef.current;

      // Load image data
      const imageData = await loadImageData(originalFile);

      // Set up worker message handler
      worker.onmessage = (e: MessageEvent<ProcessImageResponse>) => {
        const { type, progress: workerProgress, blob, width, height, error } = e.data;

        if (type === 'progress' && workerProgress) {
          setProgress(workerProgress);
        } else if (type === 'complete' && blob && width && height) {
          setProgress(100);
          setCompressedBlob(blob);
          setCompressedSize(blob.size);
          setCompressedDimensions({ width, height });
          
          const url = URL.createObjectURL(blob);
          setCompressedUrl(url);
          
          setIsProcessing(false);
          
          toast({
            title: 'Success!',
            description: 'Image compressed successfully',
          });
        } else if (type === 'error') {
          throw new Error(error || 'Processing failed');
        }
      };

      // Send processing message
      const message: ProcessImageMessage = {
        type: 'process',
        imageData,
        options: {
          targetWidth: settings.targetWidth,
          targetHeight: settings.targetHeight,
          quality: settings.quality,
          format: settings.format,
        },
      };

      worker.postMessage(message);

    } catch (error) {
      setIsProcessing(false);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to process image',
        variant: 'destructive',
      });
    }
  }, [originalFile, settings, toast]);

  const handleDownload = useCallback(() => {
    if (!compressedBlob || !originalFile) return;
    
    const extension = settings.format === 'original' 
      ? originalFile.name.split('.').pop() 
      : settings.format;
    
    const filename = `compressed-${Date.now()}.${extension}`;
    downloadBlob(compressedBlob, filename);
    
    toast({
      title: 'Downloaded',
      description: 'Image saved to your device',
    });
  }, [compressedBlob, originalFile, settings.format, toast]);

  const handleReset = useCallback(() => {
    if (originalUrl) URL.revokeObjectURL(originalUrl);
    if (compressedUrl) URL.revokeObjectURL(compressedUrl);
    
    setOriginalFile(null);
    setOriginalUrl('');
    setCompressedUrl('');
    setCompressedBlob(null);
    setOriginalSize(0);
    setCompressedSize(0);
    setProgress(0);
  }, [originalUrl, compressedUrl]);

  return (
    <section id="tool" className="relative overflow-hidden bg-[#071220] py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-24 bottom-16 h-96 w-96 rounded-full bg-success/10 blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Free Online Image Compressor
          </h2>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm font-medium text-success shadow-2xl backdrop-blur-xl">
            <Shield className="h-4 w-4" />
            <span>Compress JPEG, PNG, WebP, BMP, and TIFF files locally in your browser</span>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {!originalFile ? (
            <UploadDropzone onFileSelect={handleFileSelect} disabled={isProcessing} />
          ) : (
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-6">
                <PreviewCard
                  title="Original"
                  imageUrl={originalUrl}
                  fileSize={originalSize}
                  width={originalDimensions.width}
                  height={originalDimensions.height}
                  onRemove={handleReset}
                />
                
                {compressedUrl ? (
                  <PreviewCard
                    title="Compressed"
                    imageUrl={compressedUrl}
                    fileSize={compressedSize}
                    width={compressedDimensions.width}
                    height={compressedDimensions.height}
                    originalSize={originalSize}
                    showDownload
                    onDownload={handleDownload}
                  />
                ) : (
                  <div className="flex min-h-[22rem] items-center justify-center rounded-[1.75rem] border border-dashed border-white/15 bg-white/[0.035] p-12 shadow-card backdrop-blur-xl">
                    <p className="text-muted-foreground">
                      Your optimized image preview will appear here
                    </p>
                  </div>
                )}
              </div>

              <ControlsPanel
                originalWidth={originalDimensions.width}
                originalHeight={originalDimensions.height}
                settings={settings}
                onSettingsChange={setSettings}
              />

              <AnimatePresence>
                {isProcessing && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    <Progress value={progress} className="w-full" />
                    <p className="text-sm text-center text-muted-foreground">
                      Processing... {progress}%
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={processImage}
                  disabled={isProcessing}
                  className="min-w-[200px] rounded-2xl bg-white font-semibold text-slate-950 shadow-[0_18px_48px_rgba(37,99,235,0.24)] hover:bg-slate-100"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Compress & Preview'
                  )}
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleReset}
                  disabled={isProcessing}
                  className="rounded-2xl border-white/15 bg-white/5 font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  Reset
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ToolUI;
