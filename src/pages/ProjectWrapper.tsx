
import React, { Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { projects } from '@/data/projects';
import { getProjectComponent } from '@/projects/projectRegistry';

const ProjectWrapper = () => {
  const { id } = useParams();
  const projectId = parseInt(id || '0');
  
  // Find the project data
  const project = projects.find(p => p.id === projectId);
  
  // If project not found, redirect to home
  if (!project) {
    return <Navigate to="/" />;
  }
  
  // Get the project component from the registry
  const ProjectComponent = getProjectComponent(projectId);
  
  if (!ProjectComponent) {
    return <Navigate to="/" />;
  }
  
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="h-8 w-8 border-4 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading project...</p>
        </div>
      </div>
    }>
      <ProjectComponent project={project} />
    </Suspense>
  );
};

export default ProjectWrapper;
