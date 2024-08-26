import BarChart from "./BarCharts";
import OrderChart from "./OrderChart";
import PieChart from "./PieChart";
import UseOrders from "../customHooks/UseOrders";
import UseProducts from "../customHooks/UseProducts";
import SalesCard from "./salesCard";
import ProductsCard from "./ProductsCard";
import UsersCard from "./UsersCard";
import { Dashboard } from "@mui/icons-material";



function Overview() {
  const [, orders] = UseOrders();
  const [, data] = UseProducts();
  return (
    <div>
      <div className="flex space-x-1 text-green-300 items-center mb-4 ">
        <h1 className="text-2xl font-bold ">OVERVIEW</h1>
        <Dashboard />
      </div>

      <div className="flex space-x-4 mb-4 mr-5">
        <SalesCard />
        <ProductsCard />
        <UsersCard />
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 mr-5">
        <OrderChart orders={orders} />
        <BarChart orders={orders} />
        <PieChart data={data} />
      </div>
      
    </div>
  );
}

export default Overview;
