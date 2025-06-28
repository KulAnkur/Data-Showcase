
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id || '0');
  
  // Find the project by ID
  const project = projects.find(p => p.id === projectId);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If project not found, redirect to projects page
    if (!project && projects.length > 0) {
      navigate('/');
    }
  }, [project, navigate]);
  
  if (!project) {
    return null;
  }
  
  // Sample data for charts based on project category
  const getChartData = () => {
    if (project.category.includes('Environmental Data')) {
      return {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [
          {
            label: 'Temperature Change (°C)',
            data: [0.8, 0.9, 1.1, 1.0, 1.2, 1.3],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.4,
          },
        ],
      };
    } else if (project.category.includes('Business Analytics')) {
      return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Revenue',
            data: [7, 11, 5, 8, 3, 7],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          },
        ],
      };
    } else {
      // Default data
      return {
        labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      };
    }
  };
  
  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `${project.title} Analysis`,
      },
    },
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back button - Updated to use Link */}
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
              {/* Extended description */}
              {project.category.includes('Environmental Data') ? (
                <>
                  <br /><br />
                  This analysis examines long-term climate trends across multiple geographic regions, processing data from over 3,000 climate monitoring stations. The visualization reveals clear patterns of temperature rise, with particular acceleration evident in the Arctic region and other climate-sensitive areas.
                  <br /><br />
                  Methods involved processing raw temperature data, statistical normalization, and visualization through both geographical mapping and time-series analysis. Key findings include a 1.2°C average global temperature increase since pre-industrial times, with significant regional variations.
                </>
              ) : project.category.includes('Business Analytics') ? (
                <>
                  <br /><br />
                  This project analyzed customer behavior across multiple e-commerce platforms, processing over 500,000 user sessions and 120,000 transactions. The goal was to identify key patterns in the customer journey and optimize conversion rates through data-driven insights.
                  <br /><br />
                  Methods included cohort analysis, funnel visualization, and predictive modeling to understand drop-off points and engagement patterns. Findings revealed that cart abandonment decreased by 24% when implementing personalized recommendations based on browsing history.
                </>
              ) : (
                <>
                  <br /><br />
                  This analysis explores patterns and relationships within the dataset, highlighting key trends and insights. The methodology combined statistical analysis with visual exploration to identify meaningful patterns that impact the domain.
                  <br /><br />
                  The findings demonstrate important correlations between variables and provide actionable insights for stakeholders. Further research could expand on these findings to develop more comprehensive models.
                </>
              )}
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Key Findings</h2>
            <ul className="list-disc pl-5 mb-8 space-y-2 text-foreground/80">
              <li>Primary insight revealed a 28% correlation between measured variables</li>
              <li>Secondary patterns emerged when analyzing temporal dimensions</li>
              <li>Unexpected relationships were discovered between seemingly unrelated factors</li>
              <li>Data visualization revealed clusters previously undetected by statistical methods alone</li>
              <li>Predictive models achieved 82% accuracy in forecasting future trends</li>
            </ul>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Data Visualization</h2>
              <div className="bg-card rounded-lg p-4 shadow-sm border mb-6">
                <div className="h-[400px]">
                  {project.category.includes('Environmental Data') ? (
                    <Line data={getChartData()} options={options} />
                  ) : (
                    <Bar data={getChartData()} options={options} />
                  )}
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground italic">
                Figure 1: {project.category.includes('Environmental Data') 
                  ? 'Global temperature changes over the past 5 years showing a consistent upward trend.' 
                  : 'Comparative analysis showing key performance metrics across different segments.'}
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Methodology</h2>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              The analysis followed a rigorous data processing pipeline including data collection, cleaning, exploratory analysis, and visualization. Raw data was processed using {project.tools.join(', ')}, with special attention to handling missing values and outliers.
              <br /><br />
              Statistical methods applied included correlation analysis, regression modeling, and time-series forecasting where appropriate. The visualization approach prioritized clarity and insight, using color coding to highlight significant patterns and interactive elements to encourage deeper exploration.
            </p>
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
              
              {/* Key Statistics section removed */}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
