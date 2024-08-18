/* eslint-disable react/prop-types */
import { useState } from "react";

import Button from "./Button";
import Checkbox from "./Checkbox";

function Table({columns, data}) {
  // const [columns, data] = Usedata();
  const [selectedData, setselectedData] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setselectedData(data.map((product) => product.id));
    } else {
      setselectedData([]);
    }
  };

  const handleSelect = (id) => {
    if (selectedData.includes(id)) {
      setselectedData(
        selectedData.filter((productId) => productId !== id)
      );
    } else {
      setselectedData([...selectedData, id]);
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
                checked={selectedData.length === data.length}
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
          {data.map((item) => (
            <tr key={item.id}>
              <td className=" py-2 px-4">
                <Checkbox
                  
                  checked={selectedData.includes(item.id)}
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
