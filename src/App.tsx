import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Colleges from "./pages/Colleges";
import Scholarships from "./pages/Scholarships";
import Courses from "./pages/Courses";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import CollegeComparison from "./pages/CollegeComparison";
import AlumniStories from "./pages/AlumniStories";
import ROICalculator from "./pages/ROICalculator";
import BudgetFinder from "./pages/BudgetFinder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/college-comparison" element={<CollegeComparison />} />
          <Route path="/alumni-stories" element={<AlumniStories />} />
          <Route path="/roi-calculator" element={<ROICalculator />} />
          <Route path="/budget-finder" element={<BudgetFinder />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
