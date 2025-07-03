import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md py-3 shadow-sm" 
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-xl font-heading font-bold gradient-text">DataVizfolio</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#projects" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
            Projects
          </a>
          <Link to="/about" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
            About
          </Link>
          <a href="#skills" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
            Skills
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg">
          <nav className="container mx-auto py-4 flex flex-col space-y-4 px-4">
            <a 
              href="#projects" 
              className="text-foreground/80 hover:text-foreground font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <Link 
              to="/about" 
              className="text-foreground/80 hover:text-foreground font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <a 
              href="#skills" 
              className="text-foreground/80 hover:text-foreground font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
