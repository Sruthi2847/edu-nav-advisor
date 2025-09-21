import { useState } from "react";
import { ArrowLeft, Award, DollarSign, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockColleges } from "@/data/mockData";
import { Link } from "react-router-dom";

const CollegeComparison = () => {
  const [selectedGovtCollege, setSelectedGovtCollege] = useState("");
  const [selectedPrivateCollege, setSelectedPrivateCollege] = useState("");

  const govtColleges = mockColleges.filter(college => college.type === "government");
  const privateColleges = mockColleges.filter(college => college.type === "private");

  const getSelectedColleges = () => {
    const govt = govtColleges.find(c => c.id.toString() === selectedGovtCollege);
    const private_col = privateColleges.find(c => c.id.toString() === selectedPrivateCollege);
    return { govt, private: private_col };
  };

  const calculateROI = (placement: number, fees: number) => {
    return ((placement - fees) / fees * 100).toFixed(1);
  };

  const { govt, private: privateCollege } = getSelectedColleges();

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
                College <span className="text-primary">Comparison</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Compare government and private colleges side by side to make an informed decision
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Tool */}
        <section className="py-12">
          <div className="container">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Select Colleges to Compare
                </CardTitle>
                <CardDescription>
                  Choose one government and one private college to see a detailed comparison
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Government College</label>
                    <Select value={selectedGovtCollege} onValueChange={setSelectedGovtCollege}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Government College" />
                      </SelectTrigger>
                      <SelectContent>
                        {govtColleges.map((college) => (
                          <SelectItem key={college.id} value={college.id.toString()}>
                            {college.name} - {college.location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Private College</label>
                    <Select value={selectedPrivateCollege} onValueChange={setSelectedPrivateCollege}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Private College" />
                      </SelectTrigger>
                      <SelectContent>
                        {privateColleges.map((college) => (
                          <SelectItem key={college.id} value={college.id.toString()}>
                            {college.name} - {college.location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {govt && privateCollege && (
              <>
                {/* Comparison Table */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Detailed Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-1/3">Aspect</TableHead>
                            <TableHead className="text-center">
                              <div className="flex items-center justify-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                Government College
                              </div>
                            </TableHead>
                            <TableHead className="text-center">Private College</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">College Name</TableCell>
                            <TableCell className="text-center">
                              <div className="font-medium text-green-700">{govt.name}</div>
                              <Badge variant="secondary" className="mt-1">
                                ✅ Govt. Recognized
                              </Badge>
                            </TableCell>
                            <TableCell className="text-center font-medium">{privateCollege.name}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Location</TableCell>
                            <TableCell className="text-center">{govt.location}</TableCell>
                            <TableCell className="text-center">{privateCollege.location}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Annual Fees</TableCell>
                            <TableCell className="text-center">
                              <span className="text-green-600 font-semibold">₹{govt.annualFees.toLocaleString()}</span>
                            </TableCell>
                            <TableCell className="text-center">
                              <span className="text-red-600 font-semibold">₹{privateCollege.annualFees.toLocaleString()}</span>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Average Placement</TableCell>
                            <TableCell className="text-center">₹{govt.avgPlacement.toLocaleString()}</TableCell>
                            <TableCell className="text-center">₹{privateCollege.avgPlacement.toLocaleString()}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">ROI (Return on Investment)</TableCell>
                            <TableCell className="text-center">
                              <span className={`font-bold text-lg ${
                                parseFloat(calculateROI(govt.avgPlacement, govt.annualFees)) > 
                                parseFloat(calculateROI(privateCollege.avgPlacement, privateCollege.annualFees)) 
                                ? 'text-green-600 bg-green-50 px-2 py-1 rounded' 
                                : 'text-blue-600'
                              }`}>
                                {calculateROI(govt.avgPlacement, govt.annualFees)}%
                              </span>
                            </TableCell>
                            <TableCell className="text-center">
                              <span className="font-bold text-lg text-blue-600">
                                {calculateROI(privateCollege.avgPlacement, privateCollege.annualFees)}%
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Cutoff</TableCell>
                            <TableCell className="text-center">{govt.cutoff}</TableCell>
                            <TableCell className="text-center">{privateCollege.cutoff}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Rating</TableCell>
                            <TableCell className="text-center">{govt.rating}/5 ⭐</TableCell>
                            <TableCell className="text-center">{privateCollege.rating}/5 ⭐</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Insights */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Key Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-green-700">Government College Advantages</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Significantly lower fees (₹{govt.annualFees.toLocaleString()} vs ₹{privateCollege.annualFees.toLocaleString()})</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Higher ROI: {calculateROI(govt.avgPlacement, govt.annualFees)}% vs {calculateROI(privateCollege.avgPlacement, privateCollege.annualFees)}%</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Government backing ensures quality education</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Less financial burden on families</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-semibold text-blue-700">Private College Advantages</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>Higher average placements (₹{privateCollege.avgPlacement.toLocaleString()})</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>Modern infrastructure and facilities</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>Industry partnerships and exposure</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>Flexibility in curriculum and programs</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Conclusion */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                      <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-green-700 mb-2">Key Takeaway</h3>
                      <p className="text-green-600 text-lg">
                        "Government colleges provide higher ROI at lower cost compared to private colleges, 
                        making quality education accessible to all economic backgrounds."
                      </p>
                      <div className="mt-4 text-sm text-green-600">
                        💡 With government colleges, you save ₹{(privateCollege.annualFees - govt.annualFees).toLocaleString()} 
                        per year while getting excellent education and career opportunities.
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

export default CollegeComparison;