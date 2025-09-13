import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Eye, TrendingUp, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import teamWork from "@/assets/team-work.jpg";

const Company = () => {
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
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Aadishya is powered by a skilled and experienced team of engineers, architects, and project managers committed to excellence."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">

        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Aadishya Engineering Solutions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Delivering cutting-edge engineering solutions with sustainable innovation and unmatched expertise since 2009.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-slide-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Engineering Innovation Since 2009</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Aadishya Engineering Solutions was established with a vision to catalyze a revolution in the engineering industry through innovative ideas, sustainable practices, and cutting-edge technology.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are committed to delivering excellence in every project we undertake, ensuring cost-effectiveness, quality, and sustainability in our solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expertise spans multiple sectors including construction, industrial engineering, and smart infrastructure, supported by a highly skilled team of engineers and architects.
            </p>
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

        {/* Mission, Vision, Goals, Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

export default Company;
