import { useCallback, useState } from 'react';
import { Upload, FileImage } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { validateImageFile } from '@/utils/imageUtils';
import { useToast } from '@/hooks/use-toast';

interface UploadDropzoneProps {
  onFileSelect: (file: File) => void;
  disabled?: boolean;
}

const UploadDropzone = ({ onFileSelect, disabled }: UploadDropzoneProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (disabled) return;
    
    const file = e.dataTransfer.files[0];
    if (file) {
      const validation = validateImageFile(file);
      if (!validation.valid) {
        toast({
          title: 'Invalid file',
          description: validation.error,
          variant: 'destructive',
        });
        return;
      }
      onFileSelect(file);
    }
  }, [disabled, onFileSelect, toast]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validation = validateImageFile(file);
      if (!validation.valid) {
        toast({
          title: 'Invalid file',
          description: validation.error,
          variant: 'destructive',
        });
        return;
      }
      onFileSelect(file);
    }
  }, [onFileSelect, toast]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="hidden"
        id="file-upload"
        disabled={disabled}
      />
      
      <label
        htmlFor="file-upload"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          flex flex-col items-center justify-center
          rounded-[2rem] border border-dashed
          p-12 sm:p-16 cursor-pointer
          shadow-card backdrop-blur-xl
          transition-all duration-300
          ${isDragging 
            ? 'border-success/70 bg-success/10 scale-[1.02]' 
            : 'border-white/15 bg-white/[0.045] hover:border-primary/60 hover:bg-white/[0.07]'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <AnimatePresence mode="wait">
          {isDragging ? (
            <motion.div
              key="dragging"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex flex-col items-center"
            >
              <FileImage className="h-16 w-16 text-success mb-4" />
              <p className="text-lg font-medium text-success">Drop your image here</p>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex flex-col items-center"
            >
              <div className="mb-5 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-[0_0_54px_rgba(37,99,235,0.22)]">
                <Upload className="h-12 w-12 text-sky-300" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Upload an image to compress
              </h3>
              <p className="text-muted-foreground mb-4">
                Drag and drop a photo, screenshot, or web image, or click to browse
              </p>
              <p className="text-sm text-muted-foreground">
                Supports JPEG, PNG, WebP, BMP, and TIFF files up to 50MB
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </label>
    </motion.div>
  );
};

export default UploadDropzone;
