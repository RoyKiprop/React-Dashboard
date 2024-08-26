import { ShoppingCart } from "@mui/icons-material"
import Card from "./Card"
import UseOrders from "../customHooks/UseOrders"
function salesCard() {
  const[, orders] = UseOrders()
  return (
    <Card>
        
      <ShoppingCart/>
      <h2>ORDERS</h2>
      <p>{orders.length}</p>

    </Card>
  )
}

export default salesCard
