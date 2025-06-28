
import React, { useState } from 'react';
import { projects, projectCategories } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';

const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(selectedCategory));

  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Visualization Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore my portfolio of data analysis and visualization projects across various domains and technologies.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${(project.id % 6) * 100}ms`, animationFillMode: 'forwards' }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center mt-12 py-16">
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
