
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ChartDemo from './ChartDemo';

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-foreground/80 mb-4">
              I'm a data analyst and visualization specialist passionate about transforming complex data into clear, 
              actionable insights through compelling visual stories.
            </p>
            <p className="text-foreground/80 mb-4">
              With expertise in statistical analysis and a keen eye for design, I create data visualizations 
              that are both informative and visually engaging, helping businesses and organizations make 
              data-driven decisions.
            </p>
            <p className="text-foreground/80">
              My approach combines analytical rigor with creative visualization techniques, ensuring that complex 
              data patterns are communicated effectively to both technical and non-technical audiences.
            </p>
          </div>
          
          <div className="h-[300px] md:h-[400px]">
            <Card className="w-full h-full shadow-lg bg-gradient-to-br from-background to-muted">
              <CardContent className="p-4 h-full">
                <ChartDemo type="radar" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
