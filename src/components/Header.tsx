import { Book, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Book className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            EduGuide Pro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-primary' : 'hover:text-primary'}`}
          >
            Home
          </Link>
          <Link 
            to="/colleges" 
            className={`text-sm font-medium transition-colors ${location.pathname === '/colleges' ? 'text-primary' : 'hover:text-primary'}`}
          >
            Colleges
          </Link>
          <Link 
            to="/scholarships" 
            className={`text-sm font-medium transition-colors ${location.pathname === '/scholarships' ? 'text-primary' : 'hover:text-primary'}`}
          >
            Scholarships
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline-primary" size="sm" className="hidden sm:flex">
            <User className="h-4 w-4" />
            Login
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 flex flex-col gap-3">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/colleges" className="text-sm font-medium hover:text-primary transition-colors">
              Colleges
            </Link>
            <Link to="/scholarships" className="text-sm font-medium hover:text-primary transition-colors">
              Scholarships
            </Link>
            <Button variant="outline-primary" size="sm" className="sm:hidden mt-2">
              <User className="h-4 w-4" />
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;