import { useState } from "react";
import { ArrowLeft, Calculator, TrendingUp, DollarSign, PieChart, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockColleges } from "@/data/mockData";
import { Link } from "react-router-dom";

const ROICalculator = () => {
  const [collegeFees, setCollegeFees] = useState("");
  const [avgPlacement, setAvgPlacement] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");
  const [courseDuration, setCourseDuration] = useState("4");

  const prefilledColleges = mockColleges.slice(0, 8).map(college => ({
    id: college.id,
    name: college.name,
    type: college.type,
    fees: college.annualFees,
    placement: college.avgPlacement
  }));

  const handleCollegeSelect = (collegeId: string) => {
    const college = prefilledColleges.find(c => c.id.toString() === collegeId);
    if (college) {
      setCollegeFees((college.fees * parseInt(courseDuration)).toString());
      setAvgPlacement(college.placement.toString());
      setSelectedCollege(collegeId);
    }
  };

  const calculateROI = () => {
    const fees = parseFloat(collegeFees);
    const placement = parseFloat(avgPlacement);
    
    if (fees && placement) {
      return ((placement - fees) / fees * 100).toFixed(1);
    }
    return "0";
  };

  const getROICategory = (roi: number) => {
    if (roi >= 1000) return { label: "Excellent", color: "text-green-600", bg: "bg-green-50" };
    if (roi >= 500) return { label: "Very Good", color: "text-blue-600", bg: "bg-blue-50" };
    if (roi >= 200) return { label: "Good", color: "text-yellow-600", bg: "bg-yellow-50" };
    return { label: "Average", color: "text-gray-600", bg: "bg-gray-50" };
  };

  const roi = parseFloat(calculateROI());
  const roiCategory = getROICategory(roi);
  
  const govtColleges = prefilledColleges.filter(c => c.type === "government");
  const privateColleges = prefilledColleges.filter(c => c.type === "private");
  
  const avgGovtROI = govtColleges.reduce((sum, c) => sum + ((c.placement - (c.fees * parseInt(courseDuration))) / (c.fees * parseInt(courseDuration)) * 100), 0) / govtColleges.length;
  const avgPrivateROI = privateColleges.reduce((sum, c) => sum + ((c.placement - (c.fees * parseInt(courseDuration))) / (c.fees * parseInt(courseDuration)) * 100), 0) / privateColleges.length;

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
                ROI <span className="text-primary">Calculator</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Calculate your Return on Investment and make informed decisions about your education
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    ROI Calculator
                  </CardTitle>
                  <CardDescription>
                    Enter your details or select a college to calculate ROI
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Select Pre-filled College (Optional)</Label>
                    <Select value={selectedCollege} onValueChange={handleCollegeSelect}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a college for pre-filled data" />
                      </SelectTrigger>
                      <SelectContent>
                        {prefilledColleges.map((college) => (
                          <SelectItem key={college.id} value={college.id.toString()}>
                            {college.name} ({college.type})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Course Duration (Years)</Label>
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

                  <div className="space-y-2">
                    <Label htmlFor="fees">Total Course Fees (₹)</Label>
                    <Input
                      id="fees"
                      type="number"
                      placeholder="e.g., 200000"
                      value={collegeFees}
                      onChange={(e) => setCollegeFees(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="placement">Expected Average Placement (₹)</Label>
                    <Input
                      id="placement"
                      type="number"
                      placeholder="e.g., 600000"
                      value={avgPlacement}
                      onChange={(e) => setAvgPlacement(e.target.value)}
                    />
                  </div>

                  {collegeFees && avgPlacement && (
                    <div className={`p-4 rounded-lg ${roiCategory.bg} border`}>
                      <div className="text-center">
                        <div className={`text-3xl font-bold ${roiCategory.color}`}>
                          {calculateROI()}%
                        </div>
                        <div className={`text-sm font-medium ${roiCategory.color}`}>
                          ROI ({roiCategory.label})
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Return on Investment after {courseDuration} years
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Visual Analysis */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Government vs Private College ROI
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-green-700">Government Colleges</div>
                          <div className="text-sm text-green-600">Average ROI</div>
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                          {avgGovtROI.toFixed(1)}%
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-blue-700">Private Colleges</div>
                          <div className="text-sm text-blue-600">Average ROI</div>
                        </div>
                        <div className="text-2xl font-bold text-blue-600">
                          {avgPrivateROI.toFixed(1)}%
                        </div>
                      </div>

                      <div className="text-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border">
                        <div className="text-lg font-bold text-green-600">
                          {(avgGovtROI / avgPrivateROI).toFixed(1)}x Higher ROI
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Government colleges provide {(avgGovtROI / avgPrivateROI).toFixed(1)}x better returns
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      ROI Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {collegeFees && avgPlacement && (
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Investment (Total Fees):</span>
                          <span className="font-medium">₹{parseFloat(collegeFees).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Expected Return (Annual Salary):</span>
                          <span className="font-medium">₹{parseFloat(avgPlacement).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Net Profit (First Year):</span>
                          <span className="font-medium text-green-600">
                            ₹{(parseFloat(avgPlacement) - parseFloat(collegeFees)).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="font-medium">ROI Percentage:</span>
                          <span className={`font-bold ${roiCategory.color}`}>
                            {calculateROI()}%
                          </span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Key Insights */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Key Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold text-green-700">Cost Effective</div>
                    <div className="text-sm text-green-600">
                      Government colleges offer quality education at fraction of private college costs
                    </div>
                  </div>

                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-blue-700">High Returns</div>
                    <div className="text-sm text-blue-600">
                      Better ROI means faster recovery of educational investment
                    </div>
                  </div>

                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Calculator className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="font-semibold text-purple-700">Smart Choice</div>
                    <div className="text-sm text-purple-600">
                      Government colleges provide {(avgGovtROI / avgPrivateROI).toFixed(1)}x better ROI than private colleges
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                  <h3 className="text-xl font-bold text-green-700 mb-2">
                    💡 Government colleges give you {(avgGovtROI / avgPrivateROI).toFixed(0)}x ROI compared to private colleges!
                  </h3>
                  <p className="text-green-600">
                    Make smart financial decisions for your education. Government colleges provide excellent 
                    returns on investment while maintaining high academic standards.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ROICalculator;