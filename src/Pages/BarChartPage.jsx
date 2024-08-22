
import {BarChartRounded } from '@mui/icons-material';
import UseOrders from '../customHooks/UseOrders';
import BarChart from '../Components/BarCharts';


function BarChartPage() {
  const [, orders] = UseOrders();

  return (
    <div className="space-y-8 h-[80%]">
      <div className="flex space-x-1 items-center">
        <h1 className="text-2xl text-white font-bold">BAR CHART</h1>
        <BarChartRounded className="text-white" />
      </div>
      <div className="bg-[#2a263d] p-6 rounded-xl mr-6 h-full">
        <BarChart orders={orders} />  
      </div>
    </div>
  );
}

export default BarChartPage;