
import Table from "../Components/Table"
import UseOrders from "../customHooks/UseOrders"

function OrdersPage() {
    const[columns, orders] = UseOrders()

  return (
    <>
      <Table columns={columns} data={orders}/>
    </>
  )
}

export default OrdersPage
