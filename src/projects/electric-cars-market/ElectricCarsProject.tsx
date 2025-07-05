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
  labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Electric Car Sales (Millions)',
      data: [1.2, 1.8, 2.7, 4.5, 7.0, 7.2, 6.8],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4,
      yAxisID: 'y',
    },
    {
      label: 'Market Share (%)',
      data: [2, 3, 5, 9, 14, 17, 18.5],
      borderColor: 'rgba(255, 206, 86, 1)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      tension: 0.4,
      yAxisID: 'y1',
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Electric Car Sales and Market Share (2018-2024)' },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      title: { display: true, text: 'Sales (Millions)' },
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: { drawOnChartArea: false },
      title: { display: true, text: 'Market Share (%)' },
    },
  },
};

const ElectricCarsProject = () => (
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
          <img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&auto=format&fit=crop" alt="Effect of Electric Cars on the Market" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Effect of Electric Cars on the Market</h1>
        <p className="text-muted-foreground mb-4">April 2024</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">Market Analysis</Badge>
          <Badge variant="secondary">Sustainability</Badge>
        </div>
        <div className="flex flex-wrap gap-1 text-sm text-foreground/60 mb-6">
          <span className="font-semibold">Tools used:</span>
          <span>Python</span><span className="mx-1">•</span>
          <span>Tableau</span><span className="mx-1">•</span>
          <span>Excel</span>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-foreground/80 mb-6 leading-relaxed">
          The rise of electric vehicles (EVs) has dramatically transformed the automotive market. Global EV sales have surged from just over 1 million in 2018 to a projected 11 million in 2024, driven by advances in battery technology, government incentives, and growing environmental awareness. Market share for EVs has increased from 2% to 25% in the same period, with major automakers investing heavily in electrification and infrastructure. This project analyzes these trends and their implications for traditional car manufacturers, oil demand, and the broader economy.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Key Findings</h2>
        <ul className="list-disc pl-5 mb-8 space-y-2 text-foreground/80">
          <li>EV sales have grown nearly tenfold since 2018, with China and Europe leading adoption.</li>
          <li>Market share of electric cars is expected to reach 25% by 2024, up from 2% in 2018.</li>
          <li>Charging infrastructure and battery range have improved significantly, reducing consumer barriers.</li>
          <li>Traditional automakers are rapidly shifting investment toward electric models.</li>
          <li>Oil demand for transportation is projected to decline as EV adoption accelerates.</li>
        </ul>
        <div className="bg-card rounded-lg p-4 shadow-sm border mb-6">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default ElectricCarsProject; 