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
import TransactionPage from "./TransactionPage";
import MapPage from "./MapPage";
import TransactionDetailsPage from "./TransactionDetailsPage";
import OrdersDetails from "./OrdersDetailsPage";
import UserProfile from "../Components/UserProfile";
import { UseSelected } from "../Components/context/SelectedTableItem";
import UseProducts from "../customHooks/UseProducts";
import UseUsers from "../customHooks/Useusers";

function AppNav() {
  const [, products] = UseProducts();
  const { itemId } = UseSelected();
  const [, users] = UseUsers();
  const product = products?.find((product) => product.Id === itemId);
  const user = users?.find((user) => user.Id === itemId )

  return (
    <Routes>
      <Route index element={<OverviewPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="products/add-product" element={<NewProduct />} />

      <Route path="users" element={<UsersPage />} />
      <Route path="users/new-user" element={<NewUser />} />
      <Route path="user/:Name" element={<NewUser user={user} />} />
      <Route path="products/:Name" element={<NewProduct product={product} />} />

      <Route path="users/:Id" element={<UserProfile />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="orders/:Id" element={<OrdersDetails />} />
      <Route path="transactions" element={<TransactionPage />} />
      <Route path="transactions/:Id" element={<TransactionDetailsPage />} />
      <Route path="line-charts" element={<LineChartPage />} />
      <Route path="bar-charts" element={<BarChartPage />} />
      <Route path="pie-charts" element={<PieChartPage />} />
      <Route path="map" element={<MapPage />} />
    </Routes>
  );
}

export default AppNav;
