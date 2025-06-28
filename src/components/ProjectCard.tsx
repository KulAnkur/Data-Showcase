
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg group">
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
        <CardDescription>{project.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/80 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.category.map((cat, index) => (
            <Badge key={index} variant="secondary" className="font-normal">
              {cat}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-1 text-xs text-foreground/60">
          {project.tools.map((tool, index) => (
            <span key={index} className="after:content-['•'] after:mx-1 last:after:content-none">
              {tool}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          asChild 
          variant="ghost" 
          className="w-full justify-between group-hover:text-primary"
        >
          <Link to={`/project/${project.id}`}>
            View Project <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
