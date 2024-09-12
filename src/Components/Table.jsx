/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
  MdDelete,
} from "react-icons/md";

import Button from "./Button";
import Checkbox from "./Checkbox";
import { UseSelected } from "./context/SelectedTableItem";
import { Link } from "react-router-dom";

function Table({ columns, data, path }) {
  const [selectedData, setSelectedData] = useState([]);
  const [Page, setPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [confirm, setConfirm] = useState(false);

  const { setId } = UseSelected();

  useEffect(() => {
    
    if (selectedData.length === 0) {
      setConfirm(false);
    }
  }, [selectedData]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedData(data.map((item) => item.Id));
    } else {
      setSelectedData([]);
    }
  };

  const handleSelect = (id) => {
    if (selectedData.includes(id)) {
      setSelectedData(selectedData.filter((itemId) => itemId !== id));
    } else {
      setSelectedData([...selectedData, id]);
    }
  };

  const lastItemPos = Page * itemsPerPage;
  const firstItemPos = lastItemPos - itemsPerPage;
  const currentPageItems = data.slice(firstItemPos, lastItemPos);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (Page < totalPages) {
      setPage(Page + 1);
    }
  };

  const handlePrevPage = () => {
    if (Page > 1) {
      setPage(Page - 1);
    }
  };

  const handleDelete = () => {
  
    console.log(`Deleting records: ${selectedData}`);
    setSelectedData([]); 
    setConfirm(false); 
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full table-auto">
        <thead className="text-white">
          <tr>
            <th className="py-2 px-4 w-12">
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
            <th className="py-2 px-4 w-28">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPageItems.map((item) => (
            <tr key={item.Id}>
              <td className="py-2 px-4 w-12">
                <Checkbox
                  checked={selectedData.includes(item.Id)}
                  onChange={() => handleSelect(item.Id)}
                />
              </td>
              {columns.map((column) => (
                <td
                  key={`${item.id}-${column}`}
                  className="py-2 px-4 text-[#a7a5b8] text-left"
                >
                  {typeof item[column] === "object"
                    ? JSON.stringify(item[column])
                    : item[column]}
                </td>
              ))}
              <td className="py-2 px-4 flex space-x-2 w-28">
                <Link to={`/${path}/${item.Id}`}><Button onclick={() => setId(item.Id)}>View</Button></Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={columns.length + 2} className="pt-8 px-4 text-white text-sm">
              <div className="flex justify-between items-center">
                {selectedData.length > 0 ? (
                  <div className="flex items-center space-x-4">
                    <span>{selectedData.length} row{selectedData.length === 1 ? "" : "s"} selected</span>
                    <MdDelete onClick={() => setConfirm(true)} size={25} className="cursor-pointer" />
                  </div>
                ) : (
                  <div className="w-44"></div>
                )}
                {confirm && (
                  <div className="space-x-2">
                    <span>Are you sure you want to delete {selectedData.length} record{selectedData.length === 1 ? "" : "s"}?</span>
                    <button
                      onClick={handleDelete}
                      className="py-1 px-5 border rounded border-gray-300 text-[#a7a5b8]"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setConfirm(false)}
                      className="py-1 px-5 border rounded border-gray-300 text-[#a7a5b8]"
                    >
                      Cancel
                    </button>
                  </div>
                )}
                <div className="flex items-center space-x-10">
                  <span>
                    Page {Page} of {totalPages}
                  </span>
                  <div className="flex items-center space-x-3 pr-2">
                    <MdOutlineArrowBackIosNew
                      size={26}
                      className="cursor-pointer"
                      onClick={handlePrevPage}
                    />
                    <MdOutlineArrowForwardIos
                      size={26}
                      className="cursor-pointer"
                      onClick={handleNextPage}
                    />
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;



