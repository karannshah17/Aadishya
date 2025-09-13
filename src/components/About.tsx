import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, TrendingUp, ArrowRight } from "lucide-react";
import teamWork from "@/assets/team-work.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "We are on a mission to create new possibilities with sustainable & innovative solutions in the AEC Industry to set new standards and benchmarks."
    },
    {
      icon: Eye,
      title: "Our Vision", 
      description: "Our vision is to become a beacon of performance-driven organization, creating cutting-edge solutions with immaculate engineering expertise and innovation."
    },
    {
      icon: TrendingUp,
      title: "Our Goal",
      description: "To grow as a performance-driven company with immaculate engineering workmanship, cost-effective solutions, and industry-best practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Aadishya</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Engineering excellence through innovation and sustainable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Company Story */}
          <div className="animate-slide-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Engineering Innovation Since 2009
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Aadishya Engineering Solutions was established in 2009 with a vision to catalyze 
              a revolution in the engineering industry through innovative ideas and sustainable practices.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The company is built on strong fundamentals and a robust working system empowered by 
              the latest technologies and growth-oriented parameters, ensuring we deliver excellence 
              in every project we undertake.
            </p>
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Team Image */}
          <div className="animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={teamWork} 
                alt="Professional engineering team at work" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Goals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:shadow-glow transition-all duration-300">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;