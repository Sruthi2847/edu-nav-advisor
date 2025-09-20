import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import QuickAssessment from "@/components/QuickAssessment";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import EducationalPopup from "@/components/EducationalPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <QuickAssessment />
      </main>
      <Footer />
      <ChatBot />
      <EducationalPopup />
    </div>
  );
};

export default Index;
