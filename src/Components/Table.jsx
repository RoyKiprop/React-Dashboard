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
    <div className="dark:bg-[#2a263d] bg-[#fffff] p-8 rounded-2xl w-[1200px] h-[1300px]">
      <div className="flex justify-end">
        <Button>+ New Product</Button>
      </div>
      <table>
        <thead className=" sticky top-0 text-white">
          <tr>
            <th className=" py-2 px-4">
              <Checkbox
                checked={selectedProducts.length === products.length}
                onChange={handleSelectAll}
              />
            </th>
            {columns.map((column) => (
              <th key={column} className="py-2 px-4 text-left">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td className=" py-2 px-4">
                <Checkbox
                  
                  checked={selectedProducts.includes(item.id)}
                  onChange={() => handleSelect(item.id)}
                />
              </td>
              {columns.map((column) => (
                <td key={`${item.id}-${column}`} className=" py-2 px-4 text-[#9490a7]">
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
    </div>
  );
}

export default Table;
