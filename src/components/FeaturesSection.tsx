import { Brain, MapPin, Calendar, User, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "Aptitude Assessment",
    description: "Take personalized quizzes to discover your strengths, interests, and ideal career paths based on scientific assessments.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BookOpen,
    title: "Course-to-Career Mapping",
    description: "Visual charts showing career opportunities for each degree - from B.A. to B.Tech, explore all possibilities.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: MapPin,
    title: "College Directory",
    description: "Find government colleges near you with detailed information on programs, cut-offs, facilities, and admission processes.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Calendar,
    title: "Timeline Tracker",
    description: "Never miss important dates with notifications for admissions, scholarships, entrance exams, and counseling schedules.",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    icon: User,
    title: "Personalized Profile",
    description: "Create your academic profile and receive AI-driven recommendations tailored to your goals and preferences.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    title: "ROI Calculator",
    description: "Compare total fees vs average placements (Govt. vs Private)",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Career Success
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and guidance you need to make informed decisions about your educational and career journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-background to-accent/20">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;