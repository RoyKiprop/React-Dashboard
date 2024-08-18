import { Route, Routes } from "react-router-dom"
import ProductsPage from "./ProductsPage"
import UsersPage from "./UsersPage"
import OrdersPage from "./OrdersPage"

function AppNav() {
  return (
    <Routes>
      <Route path="products" element={<ProductsPage/>}/>
      <Route path="users" element={<UsersPage/>}/>
      <Route path="orders" element={<OrdersPage/>}/>
      
    </Routes>
  )
}

export default AppNav
