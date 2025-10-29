import { useEffect, useRef } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const AdSense = ({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidthResponsive = true,
  className = '',
  style = {}
}: AdSenseProps) => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (adRef.current && typeof window !== 'undefined') {
        // Check if adsbygoogle is available
        const adsbygoogle = (window as any).adsbygoogle || [];
        adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
};

export default AdSense;
