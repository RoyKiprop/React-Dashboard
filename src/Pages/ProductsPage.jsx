import Table from "../Components/Table";
import UseProducts from "../customHooks/UseProducts";
import { Inventory } from "@mui/icons-material";

import Button from "../Components/Button";
import { Link } from "react-router-dom";

function ProductsPage() {
  const [columns, products] = UseProducts();
  return (
    <div className="space-y-8">
      <div className="flex space-x-2 items-center">
        <h1 className="text-2xl text-green-300 font-bold">PRODUCTS</h1>
        <Inventory className="text-green-300" />
      </div>

      <div className="bg-[#2a263d] space-y-5  px-20 py-8 rounded-xl  mr-6">
        <div className="flex justify-between mr-4">
          <h4 className="text-lg text-green-300">Manage Products Inventory</h4>
          <Link to={'/products/add-product'}><Button> New Product</Button></Link>
        </div>
        <Table columns={columns} data={products} />
      </div>
    </div>
  );
}

export default ProductsPage;
