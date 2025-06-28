
import React from 'react';
import { Line } from 'react-chartjs-2';
import { climateData } from './ClimateData';

const TemperatureChart = () => {
  const data = {
    labels: climateData.years,
    datasets: [
      {
        label: 'Temperature Change (°C)',
        data: climateData.temperatureChanges,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
        fill: true,
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
        text: 'Global Temperature Changes',
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `Temperature change: ${context.parsed.y}°C`;
          }
        }
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Temperature Change (°C)'
        },
        ticks: {
          callback: function(value: any) {
            return value + '°C';
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Year'
        }
      }
    }
  };

  return (
    <div className="h-[400px] w-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default TemperatureChart;
