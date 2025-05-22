'use client'
import { BarChart2, Eye, MousePointerClick } from "lucide-react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Views',
      data: [120, 150, 170, 90, 200, 110, 140],
      borderColor: '#7e22ce',
      backgroundColor: 'rgba(126, 34, 206, 0.1)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Clicks',
      data: [30, 45, 60, 20, 75, 35, 50],
      borderColor: '#2563eb',
      backgroundColor: 'rgba(37, 99, 235, 0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function CardStatsPage() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Hello, Zaenal 👋</h1>
          <p className="text-gray-500">Monitor your digital business card performance today.</p>
        </div>
        <span className="text-sm text-gray-500">May 22, 2025</span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-purple-100 rounded-full text-purple-700">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Views</p>
            <p className="text-xl font-semibold text-gray-800">1,254</p>
            <p className="text-green-500 text-xs">+12% compared to last week</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-full text-blue-700">
            <MousePointerClick className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Clicks</p>
            <p className="text-xl font-semibold text-gray-800">678</p>
            <p className="text-red-500 text-xs">-5% compared to last week</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-full text-green-700">
            <BarChart2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Conversion Rate</p>
            <p className="text-xl font-semibold text-gray-800">54%</p>
            <p className="text-green-500 text-xs">+7% increase</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Interaction Chart</h2>
        <div className="h-64">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
