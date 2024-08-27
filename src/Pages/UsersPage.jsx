import UseUsers from "../customHooks/Useusers";
import Button from "../Components/Button";
import { Group } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "../Components/Card";
import { Avatar } from "@mui/material";
import Profile_Pic from "../assets/Profile_Pic.jpg";

function UsersPage() {
  const [, users] = UseUsers();
  const [Page, setPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const lastItemPos = Page * itemsPerPage;
  const firstItemPos = lastItemPos - itemsPerPage;

  const currentPageItems = users.slice(firstItemPos, lastItemPos);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handleNextPage = () => {
    if (Page < totalPages) setPage(Page + 1);
  };

  const handlePrevPage = () => {
    if (Page > 1) setPage(Page - 1);
  };

  return (
    <div className="space-y-8">
      <div className="flex space-x-2 items-center">
        <Group className="text-green-300"/>
        <h1 className="text-2xl text-green-300 font-bold">USERS</h1>
      </div>
      <div className="bg-[#2a263d] rounded-xl mr-6 p-8 space-y-8">
        <div className="flex justify-between">
          <h4 className="text-lg text-green-300">Manage Users</h4>
          <Link to={"/users/new-user"}>
            <Button> New User</Button>
          </Link>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentPageItems.map((user) => (
            <Card
              variant="users"
              key={user.Id}
              className="flex flex-col items-center justify-between h-full bg-[#221f34] shadow-lg rounded-lg"
            >
              <div className="w-full">
                <div className="relative w-full h-20 bg-green-900 p-2 rounded-t-lg">
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full -translate-y-1/2">
                    <Avatar
                      alt="Profile Picture"
                      src={Profile_Pic}
                      sx={{ width: 80, height: 80, border: "4px solid green" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center my-12 space-y-2">
                  <p className="text-lg font-semibold text-[#a7a5b8]">
                    {user.Name}
                  </p>
                  <p className="text-sm text-[#a7a5b8]">{user.Email}</p>
                  <p className="text-lg font-semibold text-[#a7a5b8] capitalize">
                    {user.Role}
                  </p>
                  <button className=" py-2 px-6 bg-green-900 text-gray-300 font-medium rounded-lg ">
                    View Profile
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
          <div className="text-[#a7a5b8]">
            Page {Page} of {totalPages}
          </div>
          {Page < 3 && (
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

export default UsersPage;
