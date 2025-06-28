
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { climateData } from './ClimateData';

const RegionalImpactChart = () => {
  const data = {
    labels: climateData.regions,
    datasets: [
      {
        label: 'Temperature Change by Region (°C)',
        data: climateData.regionalImpacts,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Regional Climate Impact Analysis',
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Temperature Change (°C)'
        },
        beginAtZero: true
      },
      x: {
        title: {
          display: true,
          text: 'Region'
        }
      }
    }
  };

  return (
    <div className="h-[400px] w-full mt-8">
      <Bar data={data} options={options} />
    </div>
  );
};

export default RegionalImpactChart;
