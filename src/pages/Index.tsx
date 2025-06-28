
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" />
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <AboutSection />
      <Footer />
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-6 right-6 rounded-full shadow-lg z-50 opacity-90 hover:opacity-100"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;
