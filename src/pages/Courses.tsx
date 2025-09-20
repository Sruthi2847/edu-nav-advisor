import { useState } from "react";
import { ArrowRight, BookOpen, TrendingUp, Clock, DollarSign, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockCourses } from "@/data/mockData";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(mockCourses[0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Course <span className="text-primary">Roadmaps</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore detailed career paths and roadmaps for each stream
              </p>
            </div>
          </div>
        </section>

        {/* Course Selection */}
        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {mockCourses.map((course) => (
                <Card 
                  key={course.id} 
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedCourse.id === course.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedCourse(course)}
                >
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4">{course.icon}</div>
                    <CardTitle>{course.name}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.slice(0, 3).map((subject) => (
                        <Badge key={subject} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                      {course.subjects.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{course.subjects.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Course Information */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Career Paths */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="careers" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="careers">Career Paths</TabsTrigger>
                    <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
                    <TabsTrigger value="exams">Exams</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="careers" className="space-y-4">
                    <h2 className="text-2xl font-bold mb-6">Career Opportunities in {selectedCourse.name}</h2>
                    {selectedCourse.careerPaths.map((career, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            {career.name}
                          </CardTitle>
                          <CardDescription>{career.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>Duration: {career.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <DollarSign className="h-4 w-4 text-muted-foreground" />
                              <span>Avg Salary: {career.avgSalary}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="roadmap" className="space-y-4">
                    <h2 className="text-2xl font-bold mb-6">Academic Roadmap</h2>
                    {selectedCourse.roadmap.map((phase, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">
                              {index + 1}
                            </span>
                            {phase.phase}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {phase.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="flex items-center gap-2">
                                <ArrowRight className="h-4 w-4 text-primary" />
                                <span className="text-sm">{task}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="exams" className="space-y-4">
                    <h2 className="text-2xl font-bold mb-6">Important Exams</h2>
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          Government Entrance Exams
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          {selectedCourse.governmentExams.map((exam) => (
                            <Badge key={exam} variant="outline" className="justify-center p-2">
                              {exam}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Core Subjects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedCourse.subjects.map((subject) => (
                        <Badge key={subject} variant="secondary" className="w-full justify-center">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Top Colleges
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedCourse.topColleges.map((college) => (
                        <div key={college} className="text-sm p-2 bg-muted rounded">
                          {college}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View All Colleges
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;