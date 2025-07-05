import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartData = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'New AI Startups (Thousands)',
      data: [1.5, 1.7, 2.0, 3.2, 6.0, 7.0],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4,
      yAxisID: 'y',
    },
    {
      label: 'VC Funding (Billion $)',
      data: [2.2, 2.5, 3.0, 7.5, 12.0, 10.5],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.4,
      yAxisID: 'y1',
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'AI Startups and VC Funding (2019-2024)' },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      title: { display: true, text: 'Startups (Thousands)' },
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: { drawOnChartArea: false },
      title: { display: true, text: 'VC Funding (Billion $)' },
    },
  },
};

const AIStartupGrowthProject = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container mx-auto px-4 py-8">
      <div className="mt-4 mb-6">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="ghost" className="flex items-center gap-2 hover:bg-muted" type="button">
            <ChevronLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>
      <div className="mb-12">
        <div className="rounded-lg overflow-hidden h-64 md:h-96 mb-6">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop" alt="Growth of Startups After the Launch of AI Tools like ChatGPT" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Growth of Startups After the Launch of AI Tools like ChatGPT</h1>
        <p className="text-muted-foreground mb-4">June 2024</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">AI</Badge>
          <Badge variant="secondary">Entrepreneurship</Badge>
        </div>
        <div className="flex flex-wrap gap-1 text-sm text-foreground/60 mb-6">
          <span className="font-semibold">Tools used:</span>
          <span>Python</span><span className="mx-1">•</span>
          <span>Power BI</span><span className="mx-1">•</span>
          <span>Google Trends</span>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-foreground/80 mb-6 leading-relaxed">
          The launch of advanced AI tools like ChatGPT has sparked a new wave of innovation in the startup ecosystem. Since 2021, the number of new AI-focused startups has grown rapidly, with venture capital funding reaching record highs. This project examines the trends in startup formation and investment, highlighting the role of generative AI in lowering barriers to entry and accelerating product development. The analysis uses data from startup databases, funding reports, and market research to illustrate the impact of AI on entrepreneurship.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Key Findings</h2>
        <ul className="list-disc pl-5 mb-8 space-y-2 text-foreground/80">
          <li>The number of new AI startups has increased fivefold since 2019.</li>
          <li>Venture capital funding for AI startups reached $13 billion in 2024, up from $2.2 billion in 2019.</li>
          <li>Generative AI tools have enabled rapid prototyping and reduced development costs.</li>
          <li>AI-driven startups are emerging in diverse sectors, from healthcare to finance and education.</li>
          <li>The ecosystem is seeing increased collaboration between startups, corporates, and academia.</li>
        </ul>
        <div className="bg-card rounded-lg p-4 shadow-sm border mb-6">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default AIStartupGrowthProject; 