import { ArrowRight, Play, BookOpen, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-education.jpg";
const HeroSection = () => {
  return <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/30 to-background" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-accent/50 text-sm font-medium">
                <Target className="h-4 w-4 text-primary" />
                Personalized Career Guidance Platform
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Future Starts with the{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent">
                  Right Choice
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl">Discover your perfect career path with our career guidance platform. Take personalized assessments, explore courses, find government colleges, and map your future success.</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Your Journey
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline-primary" size="lg" className="group">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            
          </div>

          {/* Image & Feature Cards */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Students collaborating with educational technology" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Feature Cards */}
            <Card className="absolute -top-4 -left-4 p-4 bg-gradient-to-r from-primary to-primary-light text-white shadow-lg">
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8" />
                <div className="rounded-none bg-black/0">
                  <div className="font-semibold">Smart Assessment</div>
                  
                </div>
              </div>
            </Card>

            <Card className="absolute -bottom-4 -right-4 p-4 bg-gradient-to-r from-secondary to-success text-white shadow-lg">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8" />
                <div>
                  <div className="font-semibold">College Directory</div>
                  <div className="text-sm opacity-90">Government colleges nearby</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;