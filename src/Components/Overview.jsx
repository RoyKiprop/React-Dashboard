import BarChart from "./BarCharts";
import OrderChart from "./LineChart";
import PieChart from "./PieChart";
import UseOrders from "../customHooks/UseOrders";
import UseProducts from "../customHooks/UseProducts";
import SalesCard from "./SalesCard";
import ProductsCard from "./ProductsCard";
import UsersCard from "./UsersCard";
import { Dashboard } from "@mui/icons-material";

import UseTransaction from "../customHooks/UseTransaction";
import Table from "./Table";
import TransactionCard from "./TransactionCard";



function Overview() {
  const [, orders] = UseOrders();
  const [, data] = UseProducts();
  const [columns, transactions] = UseTransaction();
  return (
    <div>
      <div className="flex space-x-1 text-green-300 items-center mb-4 ">
        <h1 className="text-2xl font-bold ">OVERVIEW</h1>
        <Dashboard />
      </div>

      <div className="flex justify-between text-lg space-x-4 mb-4 mr-5">
        <SalesCard />
        <TransactionCard/>
        <ProductsCard />
        <UsersCard />
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 mr-5">
        <OrderChart orders={orders} />
        <BarChart orders={orders} />
        <PieChart data={data} />
        <Table columns={columns} data={transactions} />
      </div>
      
    </div>
    
  );
}

export default Overview;
