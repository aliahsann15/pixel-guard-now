import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ToolUI from '@/components/ToolUI';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SEO
        title="PixelGuard — Free Private Image Compressor, Photo Resizer & WebP Converter"
        description="Compress images online, resize photos, and convert JPEG or PNG to WebP with PixelGuard. Free browser-based image optimization with no uploads, no signup, and private local processing."
      />
      <Header />
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <ToolUI />
        <Features />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
