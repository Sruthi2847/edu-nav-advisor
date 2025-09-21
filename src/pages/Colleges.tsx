import { useState } from "react";
import { Search, MapPin, BookOpen, IndianRupee, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockColleges } from "@/data/mockData";
const Colleges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredColleges = mockColleges.filter(college => college.name.toLowerCase().includes(searchTerm.toLowerCase()) || college.location.toLowerCase().includes(searchTerm.toLowerCase()) || college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase())));
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-secondary/10 to-primary/10">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Government <span className="text-primary">Colleges</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore quality education at affordable government colleges near you
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12">
          <div className="container">
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search colleges, courses, or locations..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10" />
            </div>

            {/* Colleges Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredColleges.map(college => <Card key={college.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{college.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {college.location} • {college.distance}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          Available Courses:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {college.courses.map((course, index) => <Badge key={index} variant="secondary" className="text-xs">
                              {course}
                            </Badge>)}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Cut-off:</span>
                          <p className="font-medium text-primary">{college.cutoff}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Annual Fees:</span>
                          <p className="font-medium text-primary">{college.fees}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Facilities:</h4>
                        <div className="flex flex-wrap gap-1">
                          {college.facilities.map((facility, index) => <Badge key={index} variant="outline" className="text-xs">
                              {facility}
                            </Badge>)}
                        </div>
                      </div>

                      <div className="pt-4 space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                          <Button 
                            className="w-full" 
                            variant="hero"
                            onClick={() => window.open("https://www.ugc.ac.in/", "_blank")}
                          >
                            View Details
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => window.location.href = "/college-comparison"}
                          >
                            Compare
                          </Button>
                        </div>
                        
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            {filteredColleges.length === 0 && <div className="text-center py-12">
                <p className="text-muted-foreground">No colleges found matching your search criteria.</p>
              </div>}

            {/* Quick Access Tools */}
            <div className="mt-12 grid md:grid-cols-4 gap-4">
              <Link to="/college-comparison">
                <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                  <span className="text-lg">⚖️</span>
                  <span className="text-sm">Compare Colleges</span>
                </Button>
              </Link>
              <Link to="/alumni-stories">
                <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                  <span className="text-lg">🎓</span>
                  <span className="text-sm">Alumni Stories</span>
                </Button>
              </Link>
              <Link to="/roi-calculator">
                <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                  <span className="text-lg">📊</span>
                  <span className="text-sm">ROI Calculator</span>
                </Button>
              </Link>
              <Link to="/budget-finder">
                <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                  <span className="text-lg">💰</span>
                  <span className="text-sm">Budget Finder</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Colleges;