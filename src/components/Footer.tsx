
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        {/* Footer Links */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-heading font-bold gradient-text">DataVizfolio</span>
              <p className="text-sm text-foreground/60 mt-1">
                Transforming data into visual stories
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Medium</a>
            </div>
          </div>
          
          <div className="text-center text-sm text-foreground/60 mt-8">
            © {new Date().getFullYear()} DataVizfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
