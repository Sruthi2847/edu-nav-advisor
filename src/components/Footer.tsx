import { Book, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Book className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold">EduGuide Pro</span>
            </div>
            <p className="text-background/70">
              Empowering students with personalized career guidance and educational pathways to success.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-background hover:text-secondary hover:bg-background/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-secondary hover:bg-background/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-secondary hover:bg-background/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-secondary hover:bg-background/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#assessment" className="text-background/70 hover:text-secondary transition-colors">Career Assessment</a></li>
              <li><a href="#courses" className="text-background/70 hover:text-secondary transition-colors">Course Explorer</a></li>
              <li><a href="#colleges" className="text-background/70 hover:text-secondary transition-colors">College Directory</a></li>
              <li><a href="#timeline" className="text-background/70 hover:text-secondary transition-colors">Timeline Tracker</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">Study Materials</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">Scholarships</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">Entrance Exams</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@eduguidepro.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">© 2025 EduGuide Pro. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/70 hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/70 hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="text-background/70 hover:text-secondary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;