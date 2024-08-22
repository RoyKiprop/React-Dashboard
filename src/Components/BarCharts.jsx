/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";
import 'chart.js/auto'; 

function BarChart({ orders }) {
  const labels = orders?.map((order) => order.ProductName);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Quantity Ordered",
        data: orders.map((order) => order.Quantity),
        backgroundColor: "rgba(34, 197, 94, 1)",
        borderColor: "rgba(34, 197, 94, 1)",
        barThickness: 15, 
      },
    ],
  };

  const option = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 1,
        categoryPercentage: 0.8, 
        barPercentage: 0.9, 
      },
    },
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'top',
        color: 'rgba(148, 144, 167, 1)',
      },
      tooltip: {
        enabled: true, 
        backgroundColor: '#fffff', 
        titleColor: '#ffff', 
        bodyColor: '#ffff', 
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'rgba(148, 144, 167, 1)', 
        },
        // grid: {
        //   display: true, 
        //   color: 'rgba(200, 200, 200, 0.3)', 
        // },
      },
      y: {
        ticks: {
          color: 'rgba(148, 144, 167, 1)',
        },
        // grid: {
        //   display: true,
        //   color: 'rgba(200, 200, 200, 0.3)', 
        // },
      },
    },
  };

  return (
    <div className="w-full h-[90%] p-6 rounded-lg bg-[#2a263d] pointer-cursor">
      <h2 className="text-green-300 text-center mb-2">Quantity ordered per Product</h2>
      <Bar data={data} options={option} />
  
    </div>
  );
}

export default BarChart;
