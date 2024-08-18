import { useEffect, useState } from "react"

function UseOrders() {
  const columns = ["OrderId","Quantity", "ProductName", "Customer", "Status"]
  const[orders, setOrders] = useState([])
   
    useEffect(function (){
        async function fetchOrders(){
            try{
              const response = await fetch("../data/Orders.json")
              if(!response.ok) throw new Error("Something went wrong while fetching Orders")
              const data = await response.json()
              setOrders(data)
              if (data.Response === "False") throw new Error ("Orders not found")
            }
            catch(error){
                console.error(error)
            }
        }
        fetchOrders()
    }, [])
  return [columns, orders]
}

export default UseOrders