import DetailItem from "../Components/DetailItem";
import UseOrders from "../customHooks/UseOrders";
import { UseSelected } from "../Components/context/SelectedTableItem";
import { ShoppingCart } from "@mui/icons-material";

function OrdersDetails() {
  const [, orders] = UseOrders();
  const { itemId } = UseSelected();
  const order = orders.find((item) => item.Id === itemId);

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
      <ShoppingCart className="text-green-300" />
      <h1 className="text-2xl text-green-300 font-bold">ORDER</h1>
      
      </div>
      <div className="bg-[#2a263d] rounded-xl shadow-lg text-[#a7a5b8] overflow-y-auto mr-6">
        <h1 className="text-xl  text-green-200 font-semibold mx-6 my-4 border-b border-green-300 pb-3">
          Order Details
        </h1>
        <div className="space-y-6 pl-6 pr-6 pb-6 pt-4 mx-auto">
          {order ? (
            <>
              
              <DetailItem variant="orders" label="User ID" value={`U00${order.UserId}`} />
              <DetailItem variant="orders" label="Customer" value={order.Customer} />
              <DetailItem variant="orders" label="Product ID" value={`P00${order.ProductId}`} />
              <DetailItem variant="orders"  label="Product Name" value={order.ProductName} />
              <DetailItem variant="orders"  label="Quantity Ordered" value={order.Quantity} />
              <DetailItem variant="orders" label="Order Date" value={order.OrderDate} />
              <DetailItem variant="orders" label="Discount" value={`${order.Discount}%`} />
              <DetailItem variant="orders" label="Status" value={order.Status} />
              
            </>
          ) : (
            <p className="text-red-500">Order not found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrdersDetails;