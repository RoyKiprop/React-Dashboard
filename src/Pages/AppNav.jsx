import { Route, Routes } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import UsersPage from "./UsersPage";
import OrdersPage from "./OrdersPage";

import LineChartPage from "./LineChartPage";

import BarChartPage from "./BarChartPage";

import OverviewPage from "./OverviewPage";
import PieChartPage from "./PieChartPage";
import NewUser from "../Components/UserForm";
import NewProduct from "../Components/ProductForm";
import { SelectedProvider } from "../Components/context/SelectedTableItem";
import ProductView from "../Components/ProductView";

function AppNav() {
  return (
    <SelectedProvider>
      <Routes>
        <Route index element={<OverviewPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/add-product" element={<NewProduct />} />
        <Route path="products/:Name" element={<ProductView/>}/>
        <Route path="users" element={<UsersPage />} />
        <Route path="users/new-user" element={<NewUser />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="line-charts" element={<LineChartPage />} />
        <Route path="bar-charts" element={<BarChartPage />} />
        <Route path="pie-charts" element={<PieChartPage />} />
      </Routes>
    </SelectedProvider>
  );
}

export default AppNav;
