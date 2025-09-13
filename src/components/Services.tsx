import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Cog, 
  Calculator, 
  PenTool, 
  Wrench, 
  ClipboardCheck,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Structural Engineering",
      description: "Comprehensive structural design and analysis for residential, commercial, and industrial buildings with advanced engineering solutions.",
      features: ["Structural Design", "Load Analysis", "Foundation Engineering", "Seismic Design"]
    },
    {
      icon: Cog,
      title: "Mechanical Engineering", 
      description: "Advanced mechanical systems design including HVAC, plumbing, and mechanical equipment solutions for optimal performance.",
      features: ["HVAC Design", "Plumbing Systems", "Fire Protection", "Energy Optimization"]
    },
    {
      icon: Calculator,
      title: "Engineering Consultancy",
      description: "Expert engineering consultation services providing technical guidance and innovative solutions for complex engineering challenges.",
      features: ["Technical Consulting", "Feasibility Studies", "Project Planning", "Risk Assessment"]
    },
    {
      icon: PenTool,
      title: "Design & Drafting",
      description: "Professional CAD drafting and 3D modeling services with precision and attention to detail for all engineering disciplines.",
      features: ["2D CAD Drafting", "3D Modeling", "Technical Drawings", "As-Built Documentation"]
    },
    {
      icon: Wrench,
      title: "Project Management",
      description: "End-to-end project management services ensuring timely delivery, quality control, and cost-effective engineering solutions.",
      features: ["Project Planning", "Quality Control", "Timeline Management", "Cost Optimization"]
    },
    {
      icon: ClipboardCheck,
      title: "Quality Assurance",
      description: "Rigorous quality assurance and testing services to ensure all engineering solutions meet industry standards and regulations.",
      features: ["Quality Testing", "Code Compliance", "Safety Standards", "Performance Validation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive engineering solutions tailored to meet your specific project requirements
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border border-primary/30 bg-card rounded-xl hover:shadow-xl hover:scale-105 transform transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need a Custom Engineering Solution?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our expert team is ready to discuss your specific requirements and deliver innovative solutions.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300"  onClick={() => window.open("https://wa.me/91XXXXXXXXXX?text=Hi, I want a free consultation", "_blank")}>
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
