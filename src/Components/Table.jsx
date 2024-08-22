/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
  MdDelete,
} from "react-icons/md";

import Button from "./Button";
import Checkbox from "./Checkbox";

function Table({ columns, data }) {
  const [selectedData, setselectedData] = useState([]);
  const [Page, setPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const handleSelectAll = (e) => {
    setselectedData(e.target.checked ? data.map((item) => item.id) : []);
  };
  

  const handleSelect = (id) => {
    setselectedData((prevSelectedData) => {
      if (prevSelectedData.includes(id)) {
        return prevSelectedData.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelectedData, id];
      }
    });
  };
  const lastItemPos = Page * itemsPerPage;
  const firstItemPos = lastItemPos - itemsPerPage;
  const currentPageItems = data.slice(firstItemPos, lastItemPos);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (Page >= totalPages) return
    else setPage(Page + 1);
    
  };
  const handlePrevPage = () => {
    if (Page <= 1) return
    else setPage(Page - 1);
  }
  return (
    <table className="w-full">
      <thead className="text-white">
        <tr>
          <th className="py-2 pr-4">
            <Checkbox
              checked={selectedData.length === data.length}
              onChange={handleSelectAll}
            />
          </th>
          {columns.map((column) => (
            <th key={column} className="py-2 px-6 text-left">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentPageItems.map((item) => (
          <tr key={item.id}>
            <td className="py-2  ">
              <Checkbox
                checked={selectedData.includes(item.id)}
                onChange={() => handleSelect(item.id)}
              />
            </td>
            {columns.map((column) => (
              <td
                key={`${item.id}-${column}`}
                className="py-2 px-6 text-[#9490a7]"
              >
                {typeof item[column] === "object"
                  ? JSON.stringify(item[column])
                  : item[column]}
              </td>
            ))}
            <td className="py-2 px-4  flex space-x-6">
              <Button>View</Button>
              <Button>Edit</Button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="text-white font-semibold">
        <tr>
          <td colSpan={columns.length + 2} className="py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-8">
                <span>{selectedData.length} rows selected </span>
                <MdDelete size={25} className="cursor-pointer" />
              </div>

              <div className="flex items-center space-x-10">
                <span>
                  Page {Page} of {totalPages}
                </span>
                <div className="flex items-center space-x-3 pr-2">
                  <MdOutlineArrowBackIosNew
                    size={26}
                    className="cursor-pointer"
                    onClick={() => handlePrevPage()}
                  />
                  <MdOutlineArrowForwardIos
                    size={26}
                    className="cursor-pointer"
                    onClick={() => handleNextPage()}
                  />
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
