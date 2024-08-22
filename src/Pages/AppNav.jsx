import { Route, Routes } from "react-router-dom"
import ProductsPage from "./ProductsPage"
import UsersPage from "./UsersPage"
import OrdersPage from "./OrdersPage"

import LineChartPage from "./LineChartPage"

import BarChartPage from "./BarChartPage"

import OverviewPage from "./OverviewPage"
import PieChartPage from "./PieChartPage"

function AppNav() {
  return (
    <Routes>
      <Route index element={<OverviewPage/>}/>
      <Route path="products" element={<ProductsPage/>}/>
      <Route path="users" element={<UsersPage/>}/>
      <Route path="orders" element={<OrdersPage/>}/>
      <Route path="line-charts" element={<LineChartPage/>}/>
      <Route path="bar-charts" element={<BarChartPage/>}/>
      <Route path="pie-charts" element={<PieChartPage/>}/>
     
    </Routes>
  )
}

export default AppNav
