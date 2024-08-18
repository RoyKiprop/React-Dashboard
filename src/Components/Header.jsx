import Search from "./Search"
import { Avatar } from "@mui/material";
import { DarkMode, Settings} from '@mui/icons-material';
import Notification from "./notification";


function Header() {
  return (
    <div className=" sticky top-0 mt-3 flex justify-between ">
        <Search/>
        <div className="flex items-center space-x-4 mr-4 ">
            <DarkMode className="text-[#a7a5b8]"/>
            <Settings className="text-[#a7a5b8]"/>
            <Notification/>
            <Avatar
            alt="Profile Picture"
            src="https://thispersondoesnotexist.com/"
            sx={{}}
          />

        </div>

      
    </div>
  )
}

export default Header
