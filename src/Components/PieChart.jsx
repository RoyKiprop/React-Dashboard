/* eslint-disable react/prop-types */
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; 

const DoughnutChart = ({ data }) => {
  const productNames = data?.map((product) => product.Name);
  const productQuantities = data?.map((product) => product.Quantity);

  const chartData = {
    labels: productNames,
    datasets: [
      {
        label: 'Quantity',
        data: productQuantities,
        backgroundColor: [
          'rgb(31, 199, 97)',  
          'rgb(2, 178, 175)',  
            
          
        ],
        borderColor: [
         'rgb(31, 199, 97)',  
          'rgb(2, 178, 175)', 
        ],
        borderWidth: 1,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%', 
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
      },
    },
    layout: {
      padding: 10,
    },
  };

  return (
    <div className="w-full h-[90%] pb-10 pt-4 bg-[#2a263d] rounded-xl">
      <h2 className='text-green-300 text-center mb-2'>Product Quantities</h2>
      <Doughnut data={chartData} options={options} /> 
    </div>
  );
};

export default DoughnutChart;

