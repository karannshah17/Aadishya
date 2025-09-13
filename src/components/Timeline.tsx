import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Timeline = () => {
  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Aadishya Engineering Solutions was established with a vision to revolutionize the engineering industry through innovation.",
      highlight: true
    },
    {
      year: "2012",
      title: "First Major Project",
      description: "Successfully completed our first large-scale commercial building project, establishing our reputation for quality and precision.",
      highlight: false
    },
    {
      year: "2015",
      title: "Team Expansion",
      description: "Expanded our team of expert engineers and designers to handle multiple concurrent projects across various sectors.",
      highlight: false
    },
    {
      year: "2018",
      title: "Technology Integration",
      description: "Integrated cutting-edge CAD and BIM technologies to enhance design accuracy and project delivery efficiency.",
      highlight: true
    },
    {
      year: "2020",
      title: "Sustainable Solutions",
      description: "Pioneered sustainable engineering practices and green building solutions, contributing to environmental conservation.",
      highlight: false
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Received multiple industry awards for excellence in engineering design and innovative problem-solving approaches.",
      highlight: false
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Embraced advanced digital tools and AI-assisted design processes to deliver even more precise and efficient solutions.",
      highlight: true
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            15+ years of engineering excellence and continuous innovation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-primary opacity-30"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex items-center animate-fade-in ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className={`group hover:shadow-elegant transition-all duration-300 border-0 ${
                    milestone.highlight ? 'bg-gradient-primary text-primary-foreground' : 'bg-card'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className={`text-2xl font-bold mr-3 ${
                          milestone.highlight ? 'text-primary-foreground' : 'text-primary'
                        }`}>
                          {milestone.year}
                        </div>
                        <CheckCircle className={`w-5 h-5 ${
                          milestone.highlight ? 'text-secondary' : 'text-primary'
                        }`} />
                      </div>
                      <h3 className={`text-xl font-bold mb-3 ${
                        milestone.highlight ? 'text-primary-foreground' : 'text-foreground'
                      }`}>
                        {milestone.title}
                      </h3>
                      <p className={`leading-relaxed ${
                        milestone.highlight ? 'text-primary-foreground/90' : 'text-muted-foreground'
                      }`}>
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Center Point */}
                <div className="flex-shrink-0 w-6 h-6 relative z-10">
                  <div className={`w-6 h-6 rounded-full border-4 ${
                    milestone.highlight 
                      ? 'bg-secondary border-primary shadow-glow' 
                      : 'bg-background border-primary'
                  }`}></div>
                </div>

                {/* Spacer */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Expert Engineers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;