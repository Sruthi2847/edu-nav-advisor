import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your EduGuide AI assistant. I can help you with course selection, college information, scholarships, and career guidance. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: { [key: string]: string } = {
    "course": "I can help you explore different course options! We have detailed information about Science, Commerce, and Arts streams. Each comes with career path mapping, salary expectations, and top colleges. Would you like to know about a specific stream?",
    "college": "Our college database includes government colleges with details about courses, fees, cutoffs, and facilities. You can search by location, stream, or specific courses. What type of college are you looking for?",
    "scholarship": "We have various scholarship opportunities including merit-based, need-based, and category-specific scholarships. The amounts range from ₹35,000 to ₹75,000. Would you like to see scholarships you might be eligible for?",
    "career": "Career guidance is our specialty! I can help you understand different career paths, salary expectations, required qualifications, and growth opportunities. What field interests you most?",
    "engineering": "Engineering is a popular choice! You can pursue B.Tech in various specializations like CSE, Mechanical, Civil, etc. Average salary ranges from ₹6-12 LPA. Key entrance exams include JEE Main and JEE Advanced. Would you like specific information about any engineering branch?",
    "medical": "Medical field offers great opportunities! Options include MBBS, BDS, BAMS, BHMS with average salaries of ₹8-20 LPA. NEET is the main entrance exam. The course duration is typically 5.5 years. Are you interested in any specific medical field?",
    "commerce": "Commerce stream opens doors to CA, Banking, Business Management, and Civil Services. Popular courses include B.Com, BBA, CA with salary ranges of ₹4-25 LPA. Would you like to know about specific commerce careers?",
    "arts": "Arts/Humanities offers diverse opportunities in Civil Services, Teaching, Journalism, and Law. You can pursue BA, LLB, or Mass Communication with salaries ranging ₹3-20 LPA. What arts field interests you?",
    "help": "I'm here to help with:\n• Course and stream selection\n• College information and comparisons\n• Scholarship opportunities\n• Career path guidance\n• Entrance exam information\n• Academic roadmaps\n\nJust ask me anything about education and careers!"
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // Default responses for common questions
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! I'm here to help you with your educational journey. You can ask me about courses, colleges, scholarships, or career guidance. What would you like to explore?";
    }
    
    if (lowerMessage.includes("thank")) {
      return "You're welcome! I'm here whenever you need guidance on your educational path. Feel free to ask anything else!";
    }

    if (lowerMessage.includes("exam")) {
      return "There are various entrance exams depending on your field of interest:\n• JEE Main/Advanced for Engineering\n• NEET for Medical\n• CLAT for Law\n• CA Foundation for Chartered Accountancy\n• UPSC CSE for Civil Services\n\nWhich field are you interested in?";
    }

    return "I understand you're asking about '" + userMessage + "'. While I'd love to help with that specific question, I'm specialized in educational guidance. Try asking about courses, colleges, scholarships, or career paths. You can also type 'help' to see what I can assist you with!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const quickActions = [
    "Tell me about Science stream",
    "Show me scholarships",
    "Engineering careers",
    "Best colleges near me",
    "Help with course selection"
  ];

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-40"
        variant="hero"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    } shadow-2xl`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          <CardTitle className="text-sm font-medium">EduGuide AI Assistant</CardTitle>
          <Badge variant="secondary" className="text-xs">
            Online
          </Badge>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-8 w-8 text-white hover:bg-white/20"
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 text-white hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-0 flex flex-col h-80">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isBot && (
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-muted text-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {!message.isBot && (
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground text-center">Quick actions:</p>
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => setInputValue(action)}
                      className="w-full text-left p-2 text-xs bg-accent hover:bg-accent/80 rounded transition-colors"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about courses, colleges, scholarships..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="icon"
                variant="hero"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default ChatBot;