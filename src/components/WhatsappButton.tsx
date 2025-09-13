import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsappButton = () => {
  const phoneNumber = "+919999999999";
  const message = "Hi";
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      {/* Pulse animation ring */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping pointer-events-none"></div>

      <Button
        asChild
        size="lg"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-elegant hover:shadow-glow transition-all duration-300 group relative"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsappButton;
