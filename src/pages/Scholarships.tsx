import { useState } from "react";
import { Search, Filter, Calendar, DollarSign, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockScholarships } from "@/data/mockData";

const Scholarships = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredScholarships = mockScholarships.filter(scholarship => {
    const matchesSearch = scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || scholarship.category.toLowerCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "merit-based": return Award;
      case "need-based": return DollarSign;
      case "gender-based": return Users;
      case "location-based": return Users;
      default: return Award;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "merit-based": return "text-primary";
      case "need-based": return "text-secondary";
      case "gender-based": return "text-success";
      case "location-based": return "text-warning";
      default: return "text-primary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Scholarship <span className="text-primary">Opportunities</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover financial aid opportunities to support your education journey
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search scholarships..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="merit">Merit-based</SelectItem>
                  <SelectItem value="need">Need-based</SelectItem>
                  <SelectItem value="gender">Gender-based</SelectItem>
                  <SelectItem value="location">Location-based</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Scholarships Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredScholarships.map((scholarship) => {
                const CategoryIcon = getCategoryIcon(scholarship.category);
                return (
                  <Card key={scholarship.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className={`p-2 rounded-lg bg-muted ${getCategoryColor(scholarship.category)}`}>
                          <CategoryIcon className="h-5 w-5" />
                        </div>
                        <Badge variant="secondary">{scholarship.status}</Badge>
                      </div>
                      <CardTitle className="text-lg">{scholarship.name}</CardTitle>
                      <CardDescription>{scholarship.provider}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Amount:</span>
                          <span className="font-semibold text-primary">{scholarship.amount}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Category:</span>
                          <Badge variant="outline">{scholarship.category}</Badge>
                        </div>
                        <div className="space-y-2">
                          <span className="text-sm text-muted-foreground">Eligibility:</span>
                          <p className="text-sm">{scholarship.eligibility}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Deadline: {scholarship.deadline}</span>
                        </div>
                        <div className="pt-4">
                          <Button className="w-full" variant="hero">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredScholarships.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No scholarships found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Scholarships;