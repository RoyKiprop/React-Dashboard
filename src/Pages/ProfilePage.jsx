import { FaUser } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";

function ProfilePage() {
  return (
    <div className="space-y-2 p-5">
        <div className="flex space-x-2 items-center">
            <FaUser/>
            <p>Profile</p>

        </div>
        <div className="flex space-x-2 items-center">
            <IoIosLogOut/>
            <p>Log Out</p>
        </div>
      
    </div>
  )
}

export default ProfilePage
