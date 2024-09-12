import { Avatar } from "@mui/material";

import ProfilePic from "../assets/Profile_Pic.jpg";
import { UseSelected } from "./context/SelectedTableItem";
import UseUsers from "../customHooks/Useusers";
import DetailItem from "./DetailItem";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { itemId, setId } = UseSelected();
  const [, users] = UseUsers();
  const user = users.find((user) => user.Id === itemId);
  return (
    <div className="space-y-4">
      <div className="flex space-x-2 items-center text-green-300">
        <h2 className="text-2xl text-green-300 font-bold"> PROFILE</h2>
      </div>

      <div className=" bg-[#2a263d] p-6 rounded-lg mr-6 text-[#9490a7]">
        <h1 className="text-xl  text-green-200 font-semibold mx-5 my-4 border-b border-green-300 pb-3">
          User Details
        </h1>
        <div className="pl-3 flex justify-between items-center mr-5">
          <Avatar
            alt="Profile Picture"
            src={ProfilePic}
            sx={{ width: 100, height: 100, border: "2px solid green" }}
          />
          <div>
            <Link to={`/user/${user?.Name}`}>
              <button
                onClick={() => setId(user.Id)}
                className=" py-1 px-5 border rounded-lg border-gray-400 text-[#a7a5b8] "
              >
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
        {user ? (
          <div className="flex">
            <div className="w-1/2">
              <DetailItem
                variant="users"
                label={"Full Name"}
                value={user.Name}
              />
              <DetailItem variant="users" label={"Role"} value={user.Role} />
              <DetailItem variant="users" label={"Email"} value={user.Email} />
              <DetailItem variant="users" label={"Phone"} value={user.Phone} />
              <DetailItem
                variant="users"
                label={"Age"}
                value={`${user.Age} years`}
              />
            </div>
            <div className="w-1/2">
              <DetailItem
                variant="users"
                label={"Street"}
                value={user.street}
              />
              <DetailItem variant="users" label={"City"} value={user.city} />
              <DetailItem variant="users" label={"State"} value={user.state} />
              <DetailItem variant="users" label={"Zip"} value={user.zip} />
              <DetailItem
                variant="users"
                label={"Date Registered"}
                value={user.registered}
              />
            </div>
          </div>
        ) : (
          <p className="text-red-500 text-md">User not Found</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
