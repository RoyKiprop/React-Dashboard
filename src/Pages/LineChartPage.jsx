
import { StackedLineChart } from '@mui/icons-material';
import UseOrders from '../customHooks/UseOrders';
import OrderChart from '../Components/OrderChart';


function LineChartPage() {
  const [, orders] = UseOrders();

  return (
    <div className="space-y-8 h-[80%]">
      <div className="flex space-x-1 items-center">
        <h1 className="text-2xl text-green-300 font-bold">LINE CHART</h1>
        <StackedLineChart className="text-green-300" />
      </div>
      <div className="bg-[#2a263d] p-6 rounded-xl mr-6 h-full">
        <OrderChart orders={orders} />  
      </div>
    </div>
  );
}

export default LineChartPage;
