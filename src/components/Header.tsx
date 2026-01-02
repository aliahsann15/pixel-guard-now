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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">PixelGuard</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('tool')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Compress
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <Link
              to="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
          </nav>

          <Button 
            onClick={() => scrollToSection('tool')}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Start Compressing
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
