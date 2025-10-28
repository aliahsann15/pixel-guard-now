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
      <Card className="overflow-hidden shadow-card">
        <div className="relative aspect-video bg-secondary/20">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain"
          />
          {onRemove && (
            <Button
              size="icon"
              variant="destructive"
              className="absolute top-2 right-2"
              onClick={onRemove}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">{title}</h3>
            {savings && (
              <span className="text-success font-semibold text-sm bg-success/10 px-2 py-1 rounded">
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
              className="w-full bg-success text-success-foreground hover:bg-success/90"
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
