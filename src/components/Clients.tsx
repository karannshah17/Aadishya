import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Clients = () => {
  const clients = [
    { name: "Zydus Hospital", industry: "Healthcare" },
    { name: "Super City", industry: "Real Estate" },
    { name: "Shilp Group", industry: "Construction" },
    { name: "Rajyash Developers", industry: "Real Estate" },
    { name: "Metro Projects", industry: "Infrastructure" },
    { name: "Green Valley", industry: "Residential" },
    { name: "Tech Tower", industry: "Commercial" },
    { name: "Industrial Zone", industry: "Industrial" },
    { name: "City Mall", industry: "Retail" },
    { name: "Skyline Heights", industry: "Residential" },
    { name: "Business Park", industry: "Commercial" },
    { name: "Medical Center", industry: "Healthcare" }
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Sharma",
      company: "Zydus Hospital",
      text: "Aadishya's engineering expertise transformed our hospital project. Their attention to detail and innovative solutions exceeded our expectations.",
      rating: 5
    },
    {
      name: "Priya Patel",
      company: "Super City Developers",
      text: "Professional team with outstanding technical knowledge. They delivered our project on time with exceptional quality and precision.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      company: "Shilp Construction",
      text: "Working with Aadishya has been a game-changer for our projects. Their sustainable solutions and cost-effective approach are remarkable.",
      rating: 5
    }
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Valued Clients</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by leading organizations across various industries
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-20">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="hover:shadow-elegant transition-all duration-300 border border-primary/30 bg-card h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">
                    {client.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {client.industry}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12 animate-fade-in">
            What Our <span className="bg-gradient-secondary bg-clip-text text-transparent">Clients Say</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 border border-primary/30 bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-secondary mx-auto" />
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">0</div>
            <div className="text-muted-foreground">Delayed Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
