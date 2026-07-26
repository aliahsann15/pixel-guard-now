import { motion } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { formatFileSize, calculateSavings } from '@/utils/imageUtils';

interface PreviewCardProps {
  title: string;
  imageUrl: string;
  fileSize: number;
  width: number;
  height: number;
  onDownload?: () => void;
  onRemove?: () => void;
  showDownload?: boolean;
  originalSize?: number;
}

const PreviewCard = ({
  title,
  imageUrl,
  fileSize,
  width,
  height,
  onDownload,
  onRemove,
  showDownload = false,
  originalSize,
}: PreviewCardProps) => {
  const savings = originalSize ? calculateSavings(originalSize, fileSize) : null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border-white/10 bg-white/[0.055] shadow-card backdrop-blur-xl">
        <div className="relative aspect-video bg-slate-950/40">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain"
          />
          {onRemove && (
            <Button
              size="icon"
              variant="destructive"
              className="absolute top-3 right-3 rounded-xl"
              onClick={onRemove}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">{title}</h3>
            {savings && (
              <span className="rounded-full border border-success/20 bg-success/10 px-3 py-1 text-sm font-semibold text-success">
                Saved {savings}
              </span>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">File Size</p>
              <p className="font-medium text-foreground">{formatFileSize(fileSize)}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Dimensions</p>
              <p className="font-medium text-foreground">{width} × {height}</p>
            </div>
          </div>
          
          {showDownload && onDownload && (
            <Button
              onClick={onDownload}
              className="w-full rounded-2xl bg-success text-success-foreground hover:bg-success/90"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default PreviewCard;
