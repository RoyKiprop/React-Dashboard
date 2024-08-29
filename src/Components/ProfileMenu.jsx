import { useState, useRef, useEffect } from "react";
import { Avatar } from "@mui/material";
import { Person, Logout } from "@mui/icons-material";
import ProfilePic from '../assets/Profile_Pic.jpg';

function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const profileRef = useRef(null);

  // Close the profile menu pop-up when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileRef]);

  return (
    <div className="relative" ref={profileRef}>
      <Avatar
        alt="Profile Picture"
        src={ProfilePic}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      {open && (
        <div className="absolute z-10 right-0 mt-2 w-40 bg-[#2c2f48] text-white shadow-lg rounded-lg">
          <div className="flex items-center space-x-4 p-4 hover:bg-[#3b3e5b] cursor-pointer">
            <Person />
            <span>Profile</span>
          </div>
          <div className="flex items-center space-x-4 p-4 hover:bg-[#3b3e5b] cursor-pointer">
            <Logout />
            <span>Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;

