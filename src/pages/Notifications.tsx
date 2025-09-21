import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotificationSystem from "@/components/NotificationSystem";
import { useState } from "react";

const Notifications = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <NotificationSystem isOpen={open} onClose={() => setOpen(false)} />
        {!open && (
          <div className="text-center mt-20 text-muted-foreground">
            All notifications closed.
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Notifications;
