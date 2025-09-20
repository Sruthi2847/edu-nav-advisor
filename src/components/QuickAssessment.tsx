import { useState } from "react";
import { CheckCircle, ArrowRight, Brain, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const questions = [
  {
    id: 1,
    question: "What type of activities do you enjoy most?",
    options: [
      { value: "analytical", label: "Solving complex problems and analyzing data", stream: "Science/Engineering" },
      { value: "creative", label: "Creative writing, art, or design projects", stream: "Arts/Humanities" },
      { value: "business", label: "Leading teams and managing projects", stream: "Commerce/Business" },
      { value: "social", label: "Helping others and community service", stream: "Social Sciences" },
    ],
  },
  {
    id: 2,
    question: "Which subject interests you the most?",
    options: [
      { value: "math", label: "Mathematics and logical reasoning", stream: "Science/Engineering" },
      { value: "language", label: "Literature and languages", stream: "Arts/Humanities" },
      { value: "economics", label: "Economics and business studies", stream: "Commerce/Business" },
      { value: "psychology", label: "Psychology and human behavior", stream: "Social Sciences" },
    ],
  },
  {
    id: 3,
    question: "What's your preferred work environment?",
    options: [
      { value: "lab", label: "Laboratory or technical workspace", stream: "Science/Engineering" },
      { value: "creative", label: "Studio or creative space", stream: "Arts/Humanities" },
      { value: "office", label: "Corporate office environment", stream: "Commerce/Business" },
      { value: "field", label: "Fieldwork and community interaction", stream: "Social Sciences" },
    ],
  },
];

const streamInfo = {
  "Science/Engineering": {
    icon: Brain,
    color: "text-primary",
    bgColor: "bg-primary/10",
    courses: ["B.Tech", "B.Sc", "B.E", "Medical", "Pharmacy"],
    careers: ["Engineer", "Doctor", "Scientist", "Researcher", "Data Analyst"],
  },
  "Arts/Humanities": {
    icon: BookOpen,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    courses: ["B.A", "B.F.A", "B.J.M.C", "B.Ed", "Languages"],
    careers: ["Writer", "Teacher", "Journalist", "Designer", "Translator"],
  },
  "Commerce/Business": {
    icon: Users,
    color: "text-success",
    bgColor: "bg-success/10",
    courses: ["B.Com", "BBA", "B.Sc Economics", "CA", "MBA"],
    careers: ["Manager", "Accountant", "Entrepreneur", "Banker", "Consultant"],
  },
  "Social Sciences": {
    icon: Users,
    color: "text-warning",
    bgColor: "bg-warning/10",
    courses: ["B.A Psychology", "B.S.W", "B.A Sociology", "Law", "Public Admin"],
    careers: ["Counselor", "Social Worker", "Lawyer", "Civil Servant", "NGO Worker"],
  },
};

const QuickAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswer = (value: string) => {
    setSelectedAnswer(value);
  };

  const nextQuestion = () => {
    if (selectedAnswer) {
      setAnswers({ ...answers, [questions[currentQuestion].id]: selectedAnswer });
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
      } else {
        setShowResults(true);
      }
    }
  };

  const calculateResult = () => {
    const streamScores: Record<string, number> = {};
    
    Object.values(answers).forEach(answer => {
      const option = questions.flatMap(q => q.options).find(opt => opt.value === answer);
      if (option) {
        streamScores[option.stream] = (streamScores[option.stream] || 0) + 1;
      }
    });

    const topStream = Object.entries(streamScores)
      .sort(([,a], [,b]) => b - a)[0];
    
    return topStream ? topStream[0] : "Science/Engineering";
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedAnswer("");
  };

  if (showResults) {
    const recommendedStream = calculateResult();
    const streamData = streamInfo[recommendedStream as keyof typeof streamInfo];
    const StreamIcon = streamData.icon;

    return (
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Your Assessment Results</h2>
            <p className="text-lg text-muted-foreground">
              Based on your responses, here's your personalized recommendation
            </p>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <CardHeader className="text-center">
              <div className={`w-16 h-16 rounded-full ${streamData.bgColor} flex items-center justify-center mx-auto mb-4`}>
                <StreamIcon className={`h-8 w-8 ${streamData.color}`} />
              </div>
              <CardTitle className="text-2xl">
                Recommended Stream: {" "}
                <span className={streamData.color}>{recommendedStream}</span>
              </CardTitle>
              <CardDescription className="text-base">
                This stream aligns perfectly with your interests and strengths
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Popular Courses:</h4>
                <ul className="space-y-2">
                  {streamData.courses.map((course, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary">Career Opportunities:</h4>
                <ul className="space-y-2">
                  {streamData.careers.map((career, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      {career}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg">
              Explore Colleges for This Stream
            </Button>
            <Button variant="outline-primary" size="lg" onClick={resetAssessment}>
              Retake Assessment
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-2xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Quick Career Assessment</h2>
            <span className="text-sm text-muted-foreground">
              {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              {questions[currentQuestion].question}
            </CardTitle>
            <CardDescription>
              Choose the option that best describes your preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedAnswer} onValueChange={handleAnswer}>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label 
                      htmlFor={option.value} 
                      className="text-base cursor-pointer flex-1 p-3 rounded-lg hover:bg-accent transition-colors"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex justify-end mt-8">
              <Button 
                onClick={nextQuestion} 
                disabled={!selectedAnswer}
                variant="hero"
              >
                {currentQuestion === questions.length - 1 ? "View Results" : "Next Question"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuickAssessment;