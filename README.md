# DataVizfolio - Data Visualization Portfolio

## Project Overview

DataVizfolio is a portfolio website for showcasing data visualization and analytics projects. The site features a clean, modern design with project cards, detailed project pages, and sections highlighting skills and background information.

## Project Structure

- `/src/components/` - UI components
- `/src/pages/` - Page components
- `/src/data/` - Data files (projects, categories)
- `/src/projects/` - Individual project components and data
  - Each project has its own folder with specific files:
    - Main project component
    - Project-specific data
    - Custom visualizations

## Key Features

- Responsive design
- Project showcase with filterable categories
- Detailed project pages with independent visualizations
- Modern UI with animations
- Independent project structure for easy customization

## Getting Started

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server
npm run dev
```

## Working with Projects

### Project Directory Structure

Each project has its own directory under `/src/projects/` containing:

```
src/projects/
├── project-name/
│   ├── ProjectComponent.tsx      # Main project component
│   ├── ProjectData.ts           # Project-specific data
│   ├── CustomCharts.tsx         # Project-specific charts
```

### Adding a New Project

1. **Update the projects data file:**

   Edit `src/data/projects.ts` to add a new project entry:

   ```typescript
   {
     id: 7, // Use the next available ID number
     title: "Your New Project Title",
     description: "A detailed description of your project - what problem it solves and its approach.",
     thumbnail: "URL_to_thumbnail_image", // Add an image URL
     category: ["Category1", "Category2"], // Choose from existing categories or add new ones
     tools: ["Tool1", "Tool2", "Tool3"], // List tools used in the project
     date: "Month Year", // When the project was completed
     url: "#project/your-project-slug" // URL slug for the project
   }
   ```

2. **Create a new project folder:**

   Create a new folder under `src/projects/` with your project name:

   ```
   mkdir -p src/projects/your-project-slug
   ```

3. **Create the project component files:**

   At minimum, create these files:
   
   - `YourProjectComponent.tsx` - Main component for your project page
   - `YourProjectData.ts` - Data specific to your project
   - Any custom chart components you need

4. **Update the project registry:**

   Edit `src/projects/projectRegistry.tsx` to include your new project:

   ```typescript
   // Add the import
   const YourProject = lazy(() => import('./your-project-slug/YourProjectComponent'));

   // Update the map
   export const projectComponentsMap: { [key: number]: React.ComponentType<{ project: Project }> } = {
     // existing entries...
     7: YourProject,
   };
   ```

### Customizing Project Components

Each project component is completely independent, allowing you to:

1. **Create custom visualizations:** 
   - Add any Chart.js, Recharts, or D3.js visualizations specific to your project
   - Customize chart options and styling

2. **Add project-specific data:**
   - Each project has its own data file for storing chart data, findings, methodology details
   - The data can be as simple or complex as your project requires

3. **Customize project layout:**
   - While the overall structure is consistent, you can modify the layout of each project
   - Add additional sections, charts, or interactive elements as needed

### Example: Adding a Chart to a Project

1. Create a new chart component in your project folder:

```typescript
// src/projects/your-project/YourCustomChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { yourProjectData } from './YourProjectData';

const YourCustomChart = () => {
  const data = {
    labels: yourProjectData.labels,
    datasets: [
      {
        label: 'Your Dataset',
        data: yourProjectData.values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    // Your chart options here
  };

  return (
    <div className="h-[400px] w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default YourCustomChart;
```

2. Use the chart in your project component:

```typescript
import YourCustomChart from './YourCustomChart';

// In your component's render method:
<div className="bg-card rounded-lg p-4 shadow-sm border mb-6">
  <YourCustomChart />
</div>
```

## Deployment

This project can be deployed using any static site hosting service such as Netlify, Vercel, or GitHub Pages.

```sh
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Router
- Chart.js
- Recharts (for advanced charts)
- Lucide Icons

## License

This project is licensed under the MIT License - see the LICENSE file for details.
