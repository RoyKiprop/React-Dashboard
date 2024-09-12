import UseProducts from "../customHooks/UseProducts";
import { Inventory } from "@mui/icons-material";
import Card from "../Components/Card";
import Button from "../Components/Button";
import { MdEdit, MdDelete } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UseSelected } from "../Components/context/SelectedTableItem";

function ProductsPage() {
  const [, products] = UseProducts();
  const [Page, setPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const { setId } = UseSelected();
  const lastItemPos = Page * itemsPerPage;
  const firstItemPos = lastItemPos - itemsPerPage;

  const currentPageItems = products.slice(firstItemPos, lastItemPos);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNextPage = () => {
    if (Page < totalPages) setPage(Page + 1);
  };

  const handlePrevPage = () => {
    if (Page > 1) setPage(Page - 1);
  };

  return (
    <div className="space-y-8">
      <div className="flex space-x-2 items-center">
        <h1 className="text-2xl text-green-300 font-bold">PRODUCTS</h1>
        <Inventory className="text-green-300" />
      </div>
      <div className="bg-[#2a263d] rounded-xl mr-6 p-8 space-y-8">
        <div className="flex justify-between">
          <h4 className="text-md text-green-300">Manage Products Inventory</h4>
          <Link to={"/products/add-product"}>
            <Button> New Product</Button>
          </Link>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentPageItems.map((product) => (
            <Card
              key={product.Id}
              className="flex flex-col h-full bg-[#221f34] rounded-lg overflow-hidden"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-xl  text-[#a7a5b8] mb-2 truncate">
                  {product.Name}
                </p>
                <p className="font-semibold text-[#a7a5b8] mb-2">
                  {product.Price}
                </p>
                <div className="flex space-x-3">
                  <Link to={`/products/${product.Name}`}>
                    <button
                      onClick={() => setId(product.Id)}
                      className="flex items-center space-x-3 py-1 px-5 border rounded-lg border-gray-400 text-[#a7a5b8] "
                    >
                      <MdEdit />
                      Edit
                    </button>
                  </Link>
                  <button className="flex items-center space-x-3 py-1 px-5  border rounded-lg border-gray-400 text-green-500">
                    <MdDelete />
                    Delete
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center space-x-5 items-center mt-6">
          {Page > 1 && (
            <button
              onClick={handlePrevPage}
              disabled={Page === 1}
              className="bg-[#221f34] text-[#a7a5b8] py-2 px-4 rounded disabled:opacity-50"
            >
              Previous
            </button>
          )}
          <div className=" text-[#a7a5b8]">
            Page {Page} of {totalPages}
          </div>
          {Page < 5 && (
            <button
              onClick={handleNextPage}
              disabled={Page === totalPages}
              className="bg-[#221f34] text-[#a7a5b8] py-2 px-4 rounded disabled:opacity-50"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
