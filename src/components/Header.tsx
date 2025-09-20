import { Book, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Book className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            EduGuide Pro
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
            Courses
          </a>
          <a href="#colleges" className="text-sm font-medium hover:text-primary transition-colors">
            Colleges
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
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
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
              Courses
            </a>
            <a href="#colleges" className="text-sm font-medium hover:text-primary transition-colors">
              Colleges
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
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