import Card from "./Card";
import { Group } from "@mui/icons-material";
import UseUsers from "../customHooks/Useusers";
function UsersCard() {
  const[, users]= UseUsers()
  return (
    <Card>
      <Group />
      <h2>USERS</h2>
      <p>{users.length}</p>
    </Card>
  );
}

export default UsersCard;
