import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bridgeImage from "@/assets/bridge-background.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated scrolling background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex animate-scroll-horizontal">
          <div 
            className="min-w-[200%] h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${bridgeImage})`,
              backgroundRepeat: 'repeat-x',
            }}
          />
          <div 
            className="min-w-[200%] h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${bridgeImage})`,
              backgroundRepeat: 'repeat-x',
            }}
          />
        </div>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Build Something Amazing
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-delay">
          A modern, elegant project showcase built with the latest web technologies. 
          Fast, responsive, and beautiful.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
          <Button 
            size="lg" 
            className="group shadow-elegant hover:shadow-xl transition-all duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="hover:bg-secondary transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
