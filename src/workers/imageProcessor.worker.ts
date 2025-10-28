/// <reference lib="webworker" />

import Pica from 'pica';

const pica = new Pica({ features: ['js', 'wasm', 'ww'] });

export interface ProcessImageMessage {
  type: 'process';
  imageData: ImageData;
  options: {
    targetWidth?: number;
    targetHeight?: number;
    quality: number;
    format: string;
  };
}

export interface ProcessImageResponse {
  type: 'progress' | 'complete' | 'error';
  progress?: number;
  blob?: Blob;
  width?: number;
  height?: number;
  originalSize?: number;
  compressedSize?: number;
  error?: string;
}

self.onmessage = async (e: MessageEvent<ProcessImageMessage>) => {
  try {
    const { imageData, options } = e.data;
    
    // Report progress
    postMessage({ type: 'progress', progress: 10 } as ProcessImageResponse);

    // Create canvas from ImageData
    const sourceCanvas = new OffscreenCanvas(imageData.width, imageData.height);
    const sourceCtx = sourceCanvas.getContext('2d');
    if (!sourceCtx) throw new Error('Failed to get source context');
    
    sourceCtx.putImageData(imageData, 0, 0);
    
    postMessage({ type: 'progress', progress: 30 } as ProcessImageResponse);

    // Determine target dimensions
    let targetWidth = options.targetWidth || imageData.width;
    let targetHeight = options.targetHeight || imageData.height;
    
    // If only one dimension is provided, calculate the other to maintain aspect ratio
    if (options.targetWidth && !options.targetHeight) {
      const aspectRatio = imageData.height / imageData.width;
      targetHeight = Math.round(targetWidth * aspectRatio);
    } else if (options.targetHeight && !options.targetWidth) {
      const aspectRatio = imageData.width / imageData.height;
      targetWidth = Math.round(targetHeight * aspectRatio);
    }

    postMessage({ type: 'progress', progress: 50 } as ProcessImageResponse);

    // Resize using pica (high quality) with fallback to native
    const destCanvas = new OffscreenCanvas(targetWidth, targetHeight);
    
    try {
      await pica.resize(sourceCanvas, destCanvas, {
        quality: 3, // High quality
        alpha: true,
        unsharpAmount: 80,
        unsharpRadius: 0.6,
        unsharpThreshold: 2,
      });
    } catch (error) {
      // Fallback to native canvas resize if Pica fails (e.g., fingerprinting protection)
      console.warn('Pica resize failed, using native canvas resize:', error);
      const destCtx = destCanvas.getContext('2d');
      if (!destCtx) throw new Error('Failed to get destination context');
      destCtx.drawImage(sourceCanvas, 0, 0, targetWidth, targetHeight);
    }

    postMessage({ type: 'progress', progress: 70 } as ProcessImageResponse);

    // Convert to blob with specified format and quality
    const mimeType = options.format === 'original' 
      ? 'image/jpeg' 
      : `image/${options.format}`;
    
    const blob = await destCanvas.convertToBlob({
      type: mimeType,
      quality: options.quality / 100,
    });

    postMessage({ type: 'progress', progress: 90 } as ProcessImageResponse);

    // Send complete message
    postMessage({
      type: 'complete',
      blob,
      width: targetWidth,
      height: targetHeight,
      compressedSize: blob.size,
    } as ProcessImageResponse);

  } catch (error) {
    postMessage({
      type: 'error',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    } as ProcessImageResponse);
  }
};
