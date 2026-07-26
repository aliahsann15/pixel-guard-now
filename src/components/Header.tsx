import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll after a short delay
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#06101f]/92 text-white shadow-[0_18px_60px_rgba(2,6,23,0.28)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#06101f]/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="group flex items-center gap-3 transition-opacity hover:opacity-90">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-[0_0_34px_rgba(37,99,235,0.22)] backdrop-blur">
              <Shield className="h-5 w-5 text-sky-300 transition-transform duration-300 group-hover:scale-110" />
            </span>
            <span className="text-xl font-bold tracking-normal text-white">PixelGuard</span>
          </Link>
          
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.07] p-1.5 shadow-2xl shadow-primary/10 backdrop-blur-xl md:flex">
            <button
              onClick={() => scrollToSection('tool')}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              Compress
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              Features
            </button>
            <Link
              to="/about"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              Blog
            </Link>
          </nav>

          <Button 
            onClick={() => scrollToSection('tool')}
            className="h-11 rounded-2xl border border-white/20 bg-white px-5 font-semibold text-slate-950 shadow-[0_18px_48px_rgba(37,99,235,0.24)] hover:bg-slate-100 sm:px-6"
          >
            Start Compressing
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
