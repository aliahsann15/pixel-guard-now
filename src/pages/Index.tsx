import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ToolUI from '@/components/ToolUI';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import AdSense from '@/components/AdSense';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Ad after Hero */}
        <div className="container mx-auto px-4 py-8">
          <AdSense 
            adSlot="1234567890" 
            adFormat="horizontal"
            className="max-w-4xl mx-auto"
          />
        </div>
        
        <ToolUI />
        
        {/* Ad after Tool */}
        <div className="container mx-auto px-4 py-8 bg-card">
          <AdSense 
            adSlot="1234567891" 
            adFormat="auto"
            className="max-w-4xl mx-auto"
          />
        </div>
        
        <Features />
        
        {/* Ad between Features and How It Works */}
        <div className="container mx-auto px-4 py-8">
          <AdSense 
            adSlot="1234567892" 
            adFormat="rectangle"
            className="max-w-4xl mx-auto"
          />
        </div>
        
        <HowItWorks />
        <FAQ />
        
        {/* Ad before Footer */}
        <div className="container mx-auto px-4 py-8 bg-card">
          <AdSense 
            adSlot="1234567893" 
            adFormat="horizontal"
            className="max-w-4xl mx-auto"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
