
import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

// Register all Chart.js components
Chart.register(...registerables);

interface ChartDemoProps {
  type: 'bar' | 'line' | 'pie' | 'doughnut' | 'radar';
}

const ChartDemo: React.FC<ChartDemoProps> = ({ type }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart instance
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      
      if (!ctx) return;

      const colors = {
        primary: '#4361ee',
        secondary: '#7209b7',
        accent: '#f72585',
        teal: '#4cc9f0',
        amber: '#fb8500',
      };

      // Sample data
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: type === 'line' ? colors.primary : [
              colors.primary,
              colors.secondary,
              colors.accent,
              colors.teal,
              colors.amber,
              colors.primary,
            ],
            borderColor: colors.primary,
            tension: 0.3,
          },
        ],
      };

      // Add second dataset for line and bar charts
      if (type === 'line' || type === 'bar') {
        data.datasets.push({
          label: 'Dataset 2',
          data: [28, 48, 40, 19, 86, 27],
          backgroundColor: colors.accent,
          borderColor: colors.accent,
          tension: 0.3,
        });
      }

      // Chart configuration
      const config = {
        type,
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 2000,
          },
          plugins: {
            legend: {
              position: 'top' as const,
            },
            tooltip: {
              enabled: true,
            },
          },
        },
      };

      // Create chart
      chartInstance.current = new Chart(ctx, config);
    }

    // Cleanup
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartDemo;
