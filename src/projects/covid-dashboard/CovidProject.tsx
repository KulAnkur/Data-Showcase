
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/data/projects';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface CovidProjectProps {
  project: Project;
}

const CovidProject: React.FC<CovidProjectProps> = ({ project }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link to="/">
          <Button 
            variant="ghost" 
            className="mb-6 flex items-center gap-2 hover:bg-muted"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
        
        {/* Project header */}
        <div className="mb-12">
          <div className="rounded-lg overflow-hidden h-64 md:h-96 mb-6">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            <p className="text-muted-foreground">{project.date}</p>
            
            <div className="flex flex-wrap gap-2 my-4">
              {project.category.map((cat, index) => (
                <Badge key={index} variant="secondary" className="font-normal">
                  {cat}
                </Badge>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-1 text-sm text-foreground/60 mb-6">
              <span className="font-semibold">Tools used:</span>
              {project.tools.map((tool, index) => (
                <span key={index} className="after:content-['•'] after:mx-1 last:after:content-none">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Project content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              {project.description}
              <br /><br />
              This interactive visualization of COVID-19 data shows spread patterns, vaccination rates, and economic impacts across countries. The dashboard incorporates data from multiple sources including WHO, Johns Hopkins University, and economic indicators from the World Bank.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Key Findings</h2>
            <ul className="list-disc pl-5 mb-8 space-y-2 text-foreground/80">
              <li>Countries with earlier intervention measures showed 42% lower fatality rates</li>
              <li>Vaccination rollout pace directly correlated with economic recovery indicators</li>
              <li>Urban density was less predictive of spread than previously theorized</li>
              <li>Healthcare system capacity was the strongest predictor of mortality rates</li>
              <li>Economic impacts varied significantly based on industry composition</li>
            </ul>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Data Visualization</h2>
              
              <div className="bg-card rounded-lg p-4 shadow-sm border mb-6">
                <div className="flex items-center justify-center h-[400px] bg-muted/50">
                  <p className="text-muted-foreground">COVID-19 Global Impact Visualization</p>
                  <p className="text-xs text-muted-foreground">(Interactive dashboard would be displayed here)</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Figure 1: COVID-19 spread visualization with country-specific metrics and timeline controls.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="bg-muted/50 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Project Date</h4>
                  <p>{project.date}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Categories</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.category.map((cat, index) => (
                      <span key={index} className="text-sm">{cat}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tools.map((tool, index) => (
                      <span key={index} className="text-sm">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CovidProject;
