import { useState } from "react";
import UseProducts from "../customHooks/UseProducts";
import Button from "./Button";
import Checkbox from "./Checkbox";

function Table() {
  const [columns, products] = UseProducts();
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedProducts(products.map((product) => product.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelect = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(
        selectedProducts.filter((productId) => productId !== id)
      );
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  return (
  
      <table className= "bg-white rounded-2xl shadow-md my-10 ">
        <thead className="bg-gray-200 sticky top-0">
          <tr >
            <th className=" border-b py-2 px-4">
              <Checkbox
                checked={selectedProducts.length === products.length}
                onChange={handleSelectAll}
              />
            </th>
            {columns.map((column) => (
              <th key={column} className="border-b py-2 px-4 text-left">
                {column}
              </th>
            ))}
          
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className=" py-2 px-4">
                <Checkbox
                  checked={selectedProducts.includes(item.id)}
                  onChange={() => handleSelect(item.id)}
                />
              </td>
              {columns.map((column) => (
                <td key={`${item.id}-${column}`} className=" py-2 px-4">
                  {typeof item[column] === "object"
                    ? JSON.stringify(item[column])
                    : item[column]}
                </td>
              ))}
              <td className=" py-2 px-4 flex space-x-5">
                <Button>View</Button>
                <Button>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
  );
}

export default Table;
