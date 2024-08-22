import Search from "./Search"
import { Avatar } from "@mui/material";
import { DarkMode, Settings} from '@mui/icons-material';
import Notification from "./notification";
import Profile_Pic from '../assets/Profile_Pic.jpg'

function Header() {
  return (
    <div className=" sticky top-0 mt-3 flex justify-between mr-6">
        <Search/>
        <div className="flex items-center space-x-4 ">
            <DarkMode className="text-[#a7a5b8]"/>
            <Settings className="text-[#a7a5b8]"/>
            <Notification/>
            <Avatar
            alt="Profile Picture"
            src={Profile_Pic}
            sx={{}}
          />

        </div>

      
    </div>
  )
}

export default Header
