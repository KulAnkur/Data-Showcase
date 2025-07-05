import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-40 z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-dataviz-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-dataviz-blue/10 rounded-full blur-3xl"></div>
      
      {/* Floating Visualization Elements */}
      <div className="absolute top-1/4 right-[10%] w-16 h-16 bg-dataviz-teal/30 rounded-lg animate-float animation-delay-1 z-10"></div>
      <div className="absolute bottom-1/3 left-[15%] w-20 h-20 bg-dataviz-amber/20 rounded-full animate-float animation-delay-2 z-10"></div>
      <div className="absolute top-1/3 left-[20%] w-12 h-12 bg-dataviz-pink/20 rounded-lg rotate-12 animate-float animation-delay-3 z-10"></div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight animate-fade-in">
            Turning <span className="gradient-text">Data</span> into
            <br /> Visual <span className="gradient-text">Stories</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-1">
            A showcase of data analysis projects that transform complex information into clear, 
            interactive visualizations with meaningful insights.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-delay-2">
            <Button asChild size="lg" className="px-8">
              <a href="#" onClick={e => e.preventDefault()}>View Projects</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <a href="#" onClick={e => e.preventDefault()}>About Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in-delay-3">
        <a href="#" aria-label="Scroll down" onClick={e => e.preventDefault()}>
          <ChevronDown className="h-10 w-10 text-primary/70" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
