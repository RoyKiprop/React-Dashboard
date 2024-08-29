import { useState, useRef, useEffect } from "react";
import { Avatar } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import Profile_Pic from '../assets/Profile_Pic.jpg';
import { Badge } from "@mui/material"


function Notification() {
  const [open, setOpen] = useState(false);
  const notificationRef = useRef(null);

  const notifications = [
    { id: 1, name: "John Doe", time: "2 mins", message: "Payment for Asics sneakers", avatar: Profile_Pic },
    { id: 2, name: "Jane Smith", time: "4 mins", message: "Purchase of New Balance sneakers", avatar: Profile_Pic },
    { id: 3, name: "Alice Johnson", time: "8 mins", message: "Purchase of Converse Chuck Taylor sneakers", avatar: Profile_Pic },
  ];

 
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationRef]);

  return (
    <div className="relative" ref={notificationRef}>
      <Badge badgeContent={3} color="success"><Notifications onClick={() => setOpen(!open)} className="cursor-pointer text-[#a7a5b8]" /></Badge>
      {open && (
        <div className="absolute z-10 right-0 mt-2 w-80 bg-[#2c2f48] text-white shadow-lg rounded-lg">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-center space-x-4 p-4 border-b border-gray-700">
              <Avatar src={notification.avatar} />
              <div className="flex-1">
                <h4 className="font-semibold text-white">{notification.name}</h4>
                <p className="text-sm text-[#9490a7]">{notification.message}</p>
              </div>
              <span className="text-sm text-white">{notification.time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notification;
