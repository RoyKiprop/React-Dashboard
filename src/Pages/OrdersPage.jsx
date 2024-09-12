import Table from "../Components/Table";
import UseOrders from "../customHooks/UseOrders";
import { ShoppingCart } from "@mui/icons-material";

function OrdersPage() {
  const [columns, orders] = UseOrders();

  return (
    <div className="space-y-8">
      <div className="flex space-x-1 items-center">
        <h1 className="text-2xl text-green-300 font-bold">ORDERS</h1>
        <ShoppingCart className="text-green-300" />
      </div>

      <div className="bg-[#2a263d] space-y-5 p-8 rounded-xl  mr-6 ">
        <h4 className="text-md text-green-300">Manage Orders Made</h4>
        <Table path={"orders"} columns={columns} data={orders} />
      </div>
    </div>
  );
}

export default OrdersPage;
