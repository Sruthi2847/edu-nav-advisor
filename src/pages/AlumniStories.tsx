import { useState } from "react";
import { ArrowLeft, Award, GraduationCap, Briefcase, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockAlumni } from "@/data/mockData";
import { Link } from "react-router-dom";

const AlumniStories = () => {
  const [selectedStream, setSelectedStream] = useState("all");

  const filteredAlumni = selectedStream === "all" 
    ? mockAlumni 
    : mockAlumni.filter(alumni => alumni.stream.toLowerCase().includes(selectedStream));

  const streams = ["all", "medical", "engineering", "law", "civil services", "education", "technical"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container">
            <Link to="/colleges" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Colleges
            </Link>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Alumni <span className="text-primary">Success Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get inspired by real stories of government college graduates who achieved remarkable success
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="flex flex-wrap gap-2 justify-center">
              {streams.map((stream) => (
                <Button
                  key={stream}
                  variant={selectedStream === stream ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStream(stream)}
                  className="capitalize"
                >
                  {stream === "all" ? "All Streams" : stream}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Stories Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAlumni.map((alumni) => (
                <Card key={alumni.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={alumni.photo}
                        alt={alumni.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div className="flex-1">
                        <CardTitle className="text-lg">{alumni.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <GraduationCap className="h-4 w-4" />
                          Class of {alumni.graduationYear}
                        </CardDescription>
                        <Badge variant="secondary" className="mt-2">
                          {alumni.stream}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">College:</p>
                        <p className="font-medium text-sm">{alumni.college}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          Current Role:
                        </p>
                        <p className="font-medium text-sm text-primary">{alumni.currentRole}</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          Key Achievement:
                        </p>
                        <p className="text-sm">{alumni.achievement}</p>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full mt-4">
                            Read Full Story
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <div className="flex items-start gap-4 mb-4">
                              <img
                                src={alumni.photo}
                                alt={alumni.name}
                                className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                              />
                              <div>
                                <DialogTitle className="text-xl">{alumni.name}</DialogTitle>
                                <DialogDescription className="text-base">
                                  {alumni.currentRole}
                                </DialogDescription>
                                <div className="flex gap-2 mt-2">
                                  <Badge variant="secondary">{alumni.stream}</Badge>
                                  <Badge variant="outline">Class of {alumni.graduationYear}</Badge>
                                </div>
                              </div>
                            </div>
                          </DialogHeader>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <GraduationCap className="h-4 w-4" />
                                Educational Background
                              </h4>
                              <p className="text-sm text-muted-foreground">{alumni.college}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Star className="h-4 w-4" />
                                Success Story
                              </h4>
                              <p className="text-sm leading-relaxed">{alumni.story}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Award className="h-4 w-4" />
                                Notable Achievement
                              </h4>
                              <p className="text-sm text-primary">{alumni.achievement}</p>
                            </div>

                            <div className="bg-muted p-4 rounded-lg">
                              <p className="text-sm font-medium text-center">
                                💡 "Quality education doesn't require expensive fees. 
                                Government colleges provide the foundation for extraordinary careers."
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredAlumni.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No alumni stories found for the selected stream.</p>
              </div>
            )}
          </div>
        </section>

        {/* Inspiration Section */}
        <section className="py-16 bg-gradient-to-br from-secondary/10 to-primary/10">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Your Success Story Awaits</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              These alumni prove that with dedication and the right education, 
              government colleges can be your gateway to extraordinary success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/colleges">
                <Button variant="hero" size="lg">
                  Explore Government Colleges
                </Button>
              </Link>
              <Link to="/scholarships">
                <Button variant="outline" size="lg">
                  Find Scholarships
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AlumniStories;