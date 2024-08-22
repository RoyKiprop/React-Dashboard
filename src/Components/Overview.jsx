import BarChart from "./BarCharts"
import OrderChart from "./OrderChart"
import PieChart from "./PieChart"
import UseOrders from "../customHooks/UseOrders"
import UseProducts from "../customHooks/UseProducts"


function Overview() {

 const [, orders] = UseOrders()
 const [, data] =  UseProducts()
  return (
    <div className="grid  grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-4 mr-5">
        <OrderChart orders={orders}/>
        <BarChart orders={orders}/>
        <PieChart data={data}/>
        
     
      
    </div>
  )
}

export default Overview
