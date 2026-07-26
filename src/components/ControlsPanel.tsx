import { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Card } from '@/components/ui/card';

export interface CompressionSettings {
  quality: number;
  format: string;
  targetWidth: number;
  targetHeight: number;
  maintainAspectRatio: boolean;
}

interface ControlsPanelProps {
  originalWidth: number;
  originalHeight: number;
  settings: CompressionSettings;
  onSettingsChange: (settings: CompressionSettings) => void;
}

const ControlsPanel = ({ originalWidth, originalHeight, settings, onSettingsChange }: ControlsPanelProps) => {
  const [localSettings, setLocalSettings] = useState(settings);

  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  const updateSettings = (updates: Partial<CompressionSettings>) => {
    const newSettings = { ...localSettings, ...updates };
    setLocalSettings(newSettings);
    onSettingsChange(newSettings);
  };

  const handleWidthChange = (width: number) => {
    if (localSettings.maintainAspectRatio) {
      const aspectRatio = originalHeight / originalWidth;
      const newHeight = Math.round(width * aspectRatio);
      updateSettings({ targetWidth: width, targetHeight: newHeight });
    } else {
      updateSettings({ targetWidth: width });
    }
  };

  const handleHeightChange = (height: number) => {
    if (localSettings.maintainAspectRatio) {
      const aspectRatio = originalWidth / originalHeight;
      const newWidth = Math.round(height * aspectRatio);
      updateSettings({ targetWidth: newWidth, targetHeight: height });
    } else {
      updateSettings({ targetHeight: height });
    }
  };

  const applyPreset = (preset: string) => {
    const aspectRatio = originalWidth / originalHeight;
    let width: number, height: number;

    switch (preset) {
      case 'instagram':
        width = 1080;
        height = Math.round(1080 / aspectRatio);
        break;
      case 'web':
        width = 1920;
        height = Math.round(1920 / aspectRatio);
        break;
      case 'thumbnail':
        width = 400;
        height = Math.round(400 / aspectRatio);
        break;
      default:
        return;
    }

    updateSettings({ targetWidth: width, targetHeight: height });
  };

  return (
    <Card className="space-y-6 border-white/10 bg-white/[0.055] p-6 shadow-card backdrop-blur-xl">
      <div className="space-y-4">
        <div>
          <Label htmlFor="quality" className="text-base font-semibold">
            Quality: {localSettings.quality}%
          </Label>
          <Slider
            id="quality"
            min={1}
            max={100}
            step={1}
            value={[localSettings.quality]}
            onValueChange={(value) => updateSettings({ quality: value[0] })}
            className="mt-3"
          />
          <p className="text-sm text-muted-foreground mt-1">
            Lower quality usually means a smaller image file size
          </p>
        </div>

        <div>
          <Label htmlFor="format" className="text-base font-semibold">
            Output Format
          </Label>
          <Select
            value={localSettings.format}
            onValueChange={(value) => updateSettings({ format: value })}
          >
            <SelectTrigger id="format" className="mt-2 rounded-xl border-white/10 bg-slate-950/40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="original">Keep Original</SelectItem>
              <SelectItem value="jpeg">JPEG</SelectItem>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="webp">WebP</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">Dimensions</Label>
            <div className="flex items-center gap-2">
              <Switch
                id="aspect-ratio"
                checked={localSettings.maintainAspectRatio}
                onCheckedChange={(checked) => updateSettings({ maintainAspectRatio: checked })}
              />
              <Label htmlFor="aspect-ratio" className="text-sm cursor-pointer">
                Keep original aspect ratio
              </Label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="width" className="text-sm">Width (px)</Label>
              <Input
                id="width"
                type="number"
                min={1}
                value={localSettings.targetWidth}
                onChange={(e) => handleWidthChange(Number(e.target.value))}
                className="mt-1 rounded-xl border-white/10 bg-slate-950/40"
              />
            </div>
            <div>
              <Label htmlFor="height" className="text-sm">Height (px)</Label>
              <Input
                id="height"
                type="number"
                min={1}
                value={localSettings.targetHeight}
                onChange={(e) => handleHeightChange(Number(e.target.value))}
                className="mt-1 rounded-xl border-white/10 bg-slate-950/40"
              />
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => applyPreset('instagram')}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:bg-white/15"
            >
              Instagram (1080px)
            </button>
            <button
              onClick={() => applyPreset('web')}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:bg-white/15"
            >
              Web (1920px)
            </button>
            <button
              onClick={() => applyPreset('thumbnail')}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:bg-white/15"
            >
              Thumbnail (400px)
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ControlsPanel;
