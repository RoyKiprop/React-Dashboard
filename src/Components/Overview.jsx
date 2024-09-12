import BarChart from "./BarCharts";
import OrderChart from "./LineChart";
import PieChart from "./PieChart";
import UseOrders from "../customHooks/UseOrders";
import UseProducts from "../customHooks/UseProducts";
import SalesCard from "./SalesCard";
import ProductsCard from "./ProductsCard";
import UsersCard from "./UsersCard";
import { Dashboard } from "@mui/icons-material";
import TransactionCard from "./TransactionCard";
import MapComponent from "../Components/map";  // Import the MapComponent

function Overview() {
  const [, orders] = UseOrders();
  const [, data] = UseProducts();
  
  return (
    <div>
      <div className="flex space-x-1 text-green-300 items-center mb-4">
        <h1 className="text-2xl font-bold">OVERVIEW</h1>
        <Dashboard />
      </div>

      <div className="flex flex-col lg:flex-row justify-between text-lg gap-4 mb-5 mr-5">
        <ProductsCard />
        <SalesCard />
        <UsersCard />
        <TransactionCard />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 mr-5">
        <BarChart orders={orders} />
        <OrderChart orders={orders} />
        <PieChart data={data} />
        <div className="h-[50vh] lg:h-[40vh] xl:h-[70vh]"> 
          <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default Overview;
