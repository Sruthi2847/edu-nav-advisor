import { useState, useEffect } from "react";
import { X, GraduationCap, BookOpen, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const EducationalPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(4);

  useEffect(() => {
    // Check if popup was shown in the last 24 hours
    const lastShown = localStorage.getItem("educationalPopupLastShown");
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (!lastShown || now - parseInt(lastShown) > oneDay) {
      // Show popup after 2 seconds delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem("educationalPopupLastShown", now.toString());
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isVisible || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible, timeLeft]);

  const closePopup = () => {
    setIsVisible(false);
  };

  const progressPercentage = ((4 - timeLeft) / 4) * 100;

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-lg animate-scale-in">
        <CardHeader className="text-center relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={closePopup}
            className="absolute right-2 top-2"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Welcome to EduGuide Pro!
            </CardTitle>
            <CardDescription className="mt-2">
              Your personalized education and career guidance platform
            </CardDescription>
          </div>
          
          <div className="space-y-2">
            <Progress value={progressPercentage} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Auto-close in {timeLeft} seconds
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Personalized Recommendations</h3>
                <p className="text-xs text-muted-foreground">
                  Get course and college suggestions based on your interests and aptitude
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                <Target className="h-4 w-4 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Career Path Mapping</h3>
                <p className="text-xs text-muted-foreground">
                  Explore detailed roadmaps for different career options
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Track Your Progress</h3>
                <p className="text-xs text-muted-foreground">
                  Monitor deadlines, applications, and academic milestones
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Button 
              className="w-full" 
              variant="hero"
              onClick={closePopup}
            >
              Start Your Journey
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-xs" 
              onClick={closePopup}
            >
              Explore Later
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              💡 <strong>Did you know?</strong> Students who use career guidance platforms are 3x more likely to make informed educational decisions!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EducationalPopup;