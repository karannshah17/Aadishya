import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgsmall from "@/assets/team-work.jpg";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden pt-20 lg:pt-24"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Engineering Excellence,
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Innovative Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
            Aadishya, a unit of RJ Enterprise, delivers cutting-edge engineering solutions 
            with sustainable innovation and immaculate expertise since 2009.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              Explore Our Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="relative z-20 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 px-8 py-3 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Consultation
            </Button>
          </div>
        </div>

        {/* Hero Image / Placeholder */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-full rounded-2xl overflow-hidden shadow-xl">
            <img
              src={heroBgsmall}
              alt="Engineering Hero"
              className="w-full h-auto object-cover rounded-2xl lg:h-[500px] lg:object-cover"
            />
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;
