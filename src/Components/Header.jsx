import Search from "./Search"

import { DarkMode, Settings} from '@mui/icons-material';
import Notification from "./NotificationMenu";

import ProfileMenu from "./ProfileMenu";

function Header() {
  return (
    <div className=" sticky top-0 mt-3 flex justify-between mr-6">
        <Search/>
        <div className="flex items-center space-x-4 ">
            <DarkMode className="text-[#a7a5b8]"/>
            <Settings className="text-[#a7a5b8]"/>
            <Notification/>
            <ProfileMenu/>

        </div>

      
    </div>
  )
}

export default Header
