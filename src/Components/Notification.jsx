import { Badge } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';

function Notification() {
  return (
    <Badge badgeContent={3} color="success">
    <NotificationsIcon className="text-[#a7a5b8]" />
  </Badge>
  )
}

export default Notification
