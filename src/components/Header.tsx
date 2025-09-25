import { Book, User, Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import NotificationSystem from "./NotificationSystem";
import { mockNotifications } from "@/data/mockData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Get current user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const unreadNotifications = mockNotifications.filter(n => !n.isRead).length;

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
        <nav className="hidden lg:flex items-center gap-4">
          <Link to="/" className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-primary' : 'hover:text-primary'}`}>Home</Link>
          <Link to="/courses" className={`text-sm font-medium transition-colors ${location.pathname === '/courses' ? 'text-primary' : 'hover:text-primary'}`}>Courses</Link>
          <Link to="/colleges" className={`text-sm font-medium transition-colors ${location.pathname === '/colleges' ? 'text-primary' : 'hover:text-primary'}`}>Colleges</Link>
          <Link to="/roi-calculator" className={`text-sm font-medium transition-colors ${location.pathname === '/roi-calculator' ? 'text-primary' : 'hover:text-primary'}`}>ROI Calculator</Link>
          <Link to="/college-comparison" className={`text-sm font-medium transition-colors ${location.pathname === '/college-comparison' ? 'text-primary' : 'hover:text-primary'}`}>Compare</Link>
          <Link to="/scholarships" className={`text-sm font-medium transition-colors ${location.pathname === '/scholarships' ? 'text-primary' : 'hover:text-primary'}`}>Scholarships</Link>
          <Link to="/notifications" className={`text-sm font-medium transition-colors ${location.pathname === '/notifications' ? 'text-primary' : 'hover:text-primary'}`}>Notifications</Link>
          <Link to="/alumni-stories" className={`text-sm font-medium transition-colors ${location.pathname === '/alumni-stories' ? 'text-primary' : 'hover:text-primary'}`}>Alumni Stories</Link>
          <Link to="/profile" className={`text-sm font-medium transition-colors ${location.pathname === '/profile' ? 'text-primary' : 'hover:text-primary'}`}>Profile</Link>
        </nav>

        <div className="flex items-center gap-3">
          {user && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsNotificationOpen(true)}
              className="relative"
            >
              <Bell className="h-4 w-4" />
              {unreadNotifications > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {unreadNotifications}
                </Badge>
              )}
            </Button>
          )}
          
          {user ? (
            <Link to="/profile">
              <Button variant="outline-primary" size="sm" className="hidden sm:flex">
                <User className="h-4 w-4" />
                Profile
              </Button>
            </Link>
          ) : (
            <Link to="/auth">
              <Button variant="outline-primary" size="sm" className="hidden sm:flex">
                <User className="h-4 w-4" />
                Login
              </Button>
            </Link>
          )}
          
          <Link to={user ? "/courses" : "/auth"}>
            <Button variant="hero" size="sm">
              {user ? "Explore Courses" : "Get Started"}
            </Button>
          </Link>
          
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
        <div className="lg:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 flex flex-col gap-3">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/courses" className="text-sm font-medium hover:text-primary transition-colors">Courses</Link>
            <Link to="/colleges" className="text-sm font-medium hover:text-primary transition-colors">Colleges</Link>
            <Link to="/roi-calculator" className="text-sm font-medium hover:text-primary transition-colors">ROI Calculator</Link>
            <Link to="/college-comparison" className="text-sm font-medium hover:text-primary transition-colors">Compare</Link>
            <Link to="/scholarships" className="text-sm font-medium hover:text-primary transition-colors">Scholarships</Link>
            <Link to="/notifications" className="text-sm font-medium hover:text-primary transition-colors">Notifications</Link>
            <Link to="/alumni-stories" className="text-sm font-medium hover:text-primary transition-colors">Alumni Stories</Link>
            {user ? null : (
              <Link to="/auth">
                <Button variant="outline-primary" size="sm" className="lg:hidden mt-2">
                  <User className="h-4 w-4" />
                  Login
                </Button>
              </Link>
            )}
          </nav>
        </div>
      )}

      {/* Notification System - Consider moving this to a global layout component */}
      {isNotificationOpen && user && (
        <NotificationSystem 
          isOpen={isNotificationOpen}
          onClose={() => setIsNotificationOpen(false)} 
        />
      )}
    </header>
  );
};

export default Header;