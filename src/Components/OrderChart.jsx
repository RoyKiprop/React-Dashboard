/* eslint-disable react/prop-types */
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; 

function OrderChart({ orders }) {
  const xAxisData = orders?.map((order) => new Date(order.OrderDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
  const quantityData = orders?.map((order) => order.Quantity);
  const discountData = orders?.map((order) => order.Discount);

  const data = {
    labels: xAxisData,
    datasets: [
      {
        label: 'Quantity Sold',
        data: quantityData,
        borderColor: 'rgba(74, 222, 128, 1)',
        backgroundColor: 'rgba(74, 222, 128, 0.2)',
        fill: true,
        tension: 0.3,
        borderWidth: 2,  
      },
      {
        label: 'Discount (%)',
        data: discountData,
        borderColor: 'rgb(2, 178, 175, 1)',
        backgroundColor: 'rgb(2, 178, 175, 0.1)',
        fill: true,
        tension: 0.3,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'rgba(148, 144, 167, 1)',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'rgba(148, 144, 167, 1)', 
        },
      },
      y: {
        ticks: {
          color: 'rgba(148, 144, 167, 1)',
        },
      },
    },
  };

  return (
    <div className="w-full h-[90%] p-6 rounded-lg bg-[#2a263d] mb-5 cursor-pointer">
      <h2 className="text-green-300 text-center mb-2">Order Quantity and Discounts Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default OrderChart;
