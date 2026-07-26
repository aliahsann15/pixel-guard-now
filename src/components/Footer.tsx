import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#06101f] py-16 text-secondary-foreground">
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-success/10 blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-card backdrop-blur-xl md:grid-cols-5 md:p-8">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                <Shield className="h-5 w-5 text-sky-300" />
              </span>
              <span className="text-xl font-bold text-white">PixelGuard</span>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Free private image compressor, photo resizer, and WebP converter. Reduce image file size directly in your browser with no uploads, no signup, and no server storage.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById('tool')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Compress Images
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  How it works
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} PixelGuard. All rights reserved.</p>
            <p className="text-center md:text-right">
              Privacy-first image compression. Powered by client-side processing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
