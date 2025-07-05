import { lazy } from 'react';
import { Project } from '@/data/projects';

// Lazy load project components for better performance
const rentalPostFires = lazy(() => import('./la-rental-post-fire/LARentalProject'));
const electricCarsProject = lazy(() => import('./electric-cars-market/ElectricCarsProject'));
const aiStartupGrowthProject = lazy(() => import('./ai-startup-growth/AIStartupGrowthProject'));

// Registry that maps project IDs to their respective components
export const projectComponentsMap: { [key: number]: React.ComponentType<{ project: Project }> } = {
  1: rentalPostFires,
  2: electricCarsProject,
  3: aiStartupGrowthProject,
};

// Get project component by ID
export const getProjectComponent = (id: number) => {
  return projectComponentsMap[id] || null;
};
