"use client";

import { useEffect, useRef } from "react";

import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  LineController,
  ChartConfiguration,
} from "chart.js";

// Register the required components
Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,

  LineController
);
const Chart3: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null); // Reference for the canvas element

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Define the gradient color
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "#0082FE");
    gradient.addColorStop(1, "rgba(210, 80, 255, 0)");

    // Chart configuration
    const options1: ChartConfiguration = {
      type: "line", // Chart type
      data: {
        labels: ["", "", "", "", "", "", ""], // Placeholder labels (for sparkline effect)
        datasets: [
          {
            data: [20, 50, 7, 100, -8, 80, 100], // Data points
            borderColor: "#0082FE", // Border color
            backgroundColor: gradient, // Background color (gradient)
            fill: true, // Fill under the line
            borderWidth: 1, // Border width
            tension: 0.4, // Smooth curve (like `smooth` in ApexCharts)
            pointRadius: 0, // Hide points
          },
        ],
      },
      options: {
        responsive: true, // Make chart responsive
        maintainAspectRatio: false, // Allow resizing of chart
        scales: {
          x: {
            display: false, // Hide x-axis (for sparkline effect)
          },
          y: {
            beginAtZero: true, // Start y-axis from 0
            display: false, // Hide y-axis (for sparkline effect)
          },
        },
        plugins: {
          tooltip: {
            enabled: false, // Disable tooltip
          },
        },
        elements: {
          line: {
            tension: 0.4, // Smooth curve (same as ApexCharts)
            borderCapStyle: "butt", // Stroke line cap (like `lineCap: "butt"` in ApexCharts)
          },
        },
      },
    };

    // Create and render the chart
    const chart1 = new Chart(ctx, options1);

    // Clean up the chart instance on unmount
    return () => {
      chart1.destroy();
    };
  }, []);

  return (
    <div style={{ height: "36px", width: "100%" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Chart3;
