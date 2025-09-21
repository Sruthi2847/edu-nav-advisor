import { useState } from "react";
import { ArrowLeft, DollarSign, Search, MapPin, GraduationCap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockColleges } from "@/data/mockData";
import { Link } from "react-router-dom";

const BudgetFinder = () => {
  const [budget, setBudget] = useState("");
  const [selectedStream, setSelectedStream] = useState("");
  const [courseDuration, setCourseDuration] = useState("4");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (budget) {
      setShowResults(true);
    }
  };

  const totalBudget = budget ? parseFloat(budget) * parseInt(courseDuration) : 0;
  
  const affordableColleges = mockColleges
    .filter(college => college.type === "government") // Focus on government colleges
    .filter(college => {
      const totalFees = college.annualFees * parseInt(courseDuration);
      return totalFees <= totalBudget;
    })
    .filter(college => {
      if (!selectedStream) return true;
      return college.courses.some(course => 
        course.toLowerCase().includes(selectedStream.toLowerCase())
      );
    })
    .sort((a, b) => a.annualFees - b.annualFees);

  const savedAmount = totalBudget > 0 ? mockColleges
    .filter(c => c.type === "private")
    .reduce((min, college) => Math.min(min, college.annualFees * parseInt(courseDuration)), Infinity) - totalBudget : 0;

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
                My Budget → <span className="text-primary">My College</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find the best government colleges that fit your budget and academic goals
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            {/* Budget Input Form */}
            <Card className="max-w-2xl mx-auto mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Enter Your Budget Details
                </CardTitle>
                <CardDescription>
                  Tell us your yearly budget and preferences to find suitable colleges
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Maximum Yearly Budget (₹)</Label>
                    <Input
                      id="budget"
                      type="number"
                      placeholder="e.g., 50000"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Course Duration</Label>
                    <Select value={courseDuration} onValueChange={setCourseDuration}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 Years</SelectItem>
                        <SelectItem value="4">4 Years</SelectItem>
                        <SelectItem value="5">5 Years</SelectItem>
                        <SelectItem value="6">6 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Preferred Stream (Optional)</Label>
                  <Select value={selectedStream} onValueChange={setSelectedStream}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your preferred stream" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Streams</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="medical">Medical</SelectItem>
                      <SelectItem value="commerce">Commerce</SelectItem>
                      <SelectItem value="arts">Arts</SelectItem>
                      <SelectItem value="law">Law</SelectItem>
                      <SelectItem value="teacher">Teaching</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {budget && (
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-sm text-muted-foreground">Total Budget for {courseDuration} years:</div>
                    <div className="text-2xl font-bold text-primary">₹{totalBudget.toLocaleString()}</div>
                  </div>
                )}

                <Button 
                  onClick={handleSearch} 
                  className="w-full" 
                  variant="hero"
                  disabled={!budget}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Find My Colleges
                </Button>
              </CardContent>
            </Card>

            {/* Results Section */}
            {showResults && (
              <>
                {/* Summary */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Budget Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">₹{totalBudget.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Your Total Budget</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{affordableColleges.length}</div>
                        <div className="text-sm text-muted-foreground">Affordable Government Colleges</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          ₹{savedAmount > 0 ? savedAmount.toLocaleString() : "0"}
                        </div>
                        <div className="text-sm text-muted-foreground">Savings vs Private Colleges</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* College Results */}
                {affordableColleges.length > 0 ? (
                  <>
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold mb-2">
                        With ₹{budget?.toLocaleString()} budget, you can study in these {affordableColleges.length} top Government Colleges:
                      </h2>
                      <p className="text-muted-foreground">All colleges listed below fit within your budget and offer quality education</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {affordableColleges.map((college) => {
                        const totalFees = college.annualFees * parseInt(courseDuration);
                        const withinBudget = totalFees <= totalBudget;
                        const budgetUtilization = (totalFees / totalBudget * 100).toFixed(1);

                        return (
                          <Card key={college.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                              <div className="flex items-center justify-between mb-2">
                                <Badge variant="secondary" className="bg-green-100 text-green-700">
                                  ✅ Government
                                </Badge>
                                <Badge variant="outline">
                                  {budgetUtilization}% of budget
                                </Badge>
                              </div>
                              <CardTitle className="text-lg">{college.name}</CardTitle>
                              <CardDescription className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                {college.location}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                <div>
                                  <div className="text-sm text-muted-foreground">Annual Fees:</div>
                                  <div className="text-lg font-semibold text-green-600">
                                    ₹{college.annualFees.toLocaleString()}/year
                                  </div>
                                </div>

                                <div>
                                  <div className="text-sm text-muted-foreground">Total Course Fees ({courseDuration} years):</div>
                                  <div className="text-lg font-semibold text-primary">
                                    ₹{totalFees.toLocaleString()}
                                  </div>
                                </div>

                                <div>
                                  <div className="text-sm text-muted-foreground">Available Courses:</div>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {college.courses.slice(0, 2).map((course, index) => (
                                      <Badge key={index} variant="outline" className="text-xs">
                                        {course}
                                      </Badge>
                                    ))}
                                    {college.courses.length > 2 && (
                                      <Badge variant="outline" className="text-xs">
                                        +{college.courses.length - 2} more
                                      </Badge>
                                    )}
                                  </div>
                                </div>

                                <div className="flex justify-between items-center text-sm">
                                  <span className="text-muted-foreground">Avg. Placement:</span>
                                  <span className="font-medium">₹{college.avgPlacement?.toLocaleString()}</span>
                                </div>

                                <div className="pt-2">
                                  <div className="text-xs text-green-600 text-center">
                                    💰 Saves ₹{(totalBudget - totalFees).toLocaleString()} from your budget
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <Card>
                    <CardContent className="text-center py-12">
                      <GraduationCap className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">No colleges found within your budget</h3>
                      <p className="text-muted-foreground mb-4">
                        Try increasing your budget or consider scholarships to make education more affordable.
                      </p>
                      <div className="flex justify-center gap-4">
                        <Link to="/scholarships">
                          <Button variant="outline">
                            Find Scholarships
                          </Button>
                        </Link>
                        <Button 
                          variant="hero" 
                          onClick={() => setBudget((parseFloat(budget || "0") + 20000).toString())}
                        >
                          Increase Budget
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Tips Section */}
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>💡 Budget Tips for Students</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Maximizing Your Budget:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            Apply for government scholarships early
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            Consider hostels for accommodation savings
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            Look for fee concessions for merit students
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            Government colleges offer best value for money
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Additional Costs to Consider:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            Books and study materials: ₹10,000-20,000/year
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            Accommodation: ₹30,000-60,000/year
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            Food and personal expenses: ₹40,000-80,000/year
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            Transportation: ₹5,000-15,000/year
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetFinder;