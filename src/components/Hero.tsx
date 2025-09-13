import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Building } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import placeholderImg from "@/assets/placeholder.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />

      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          
          {/* Left: Text content */}
          <div className="lg:w-1/2 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Engineering Excellence,
              <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                Innovative Solutions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed animate-fade-in">
              Aadishya, a unit of RJ Enterprise, delivers cutting-edge engineering solutions 
              with sustainable innovation and immaculate expertise since 2009.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow px-8 py-3"
              >
                Explore Our Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-foreground/80 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground hover:text-accent px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Consultation
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl animate-slide-in">
              {[
                { icon: <Award className="w-6 h-6 text-secondary" />, value: "15+", label: "Years of Excellence" },
                { icon: <Building className="w-6 h-6 text-secondary" />, value: "500+", label: "Projects Completed" },
                { icon: <Users className="w-6 h-6 text-secondary" />, value: "100+", label: "Satisfied Clients" },
              ].map((card, idx) => (
                <div 
                  key={idx} 
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    {card.icon}
                    <span className="text-2xl font-bold text-primary-foreground">{card.value}</span>
                  </div>
                  <p className="text-primary-foreground/80 text-sm">{card.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Placeholder image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img 
              src={placeholderImg} 
              alt="Hero placeholder" 
              className="w-full max-w-lg rounded-lg shadow-xl animate-fade-in"
            />
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
