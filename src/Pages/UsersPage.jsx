import Table from "../Components/Table";
import UseUsers from "../customHooks/Useusers";
import Button from "../Components/Button";
import { Group } from "@mui/icons-material";

function UsersPage() {
  const [columns, users] = UseUsers();

  return (
    <div className="space-y-8">
      <div className="flex space-x-2 items-center">
        <h1 className="text-2xl text-white font-bold">USERS</h1>
        <Group className="text-white"/>
      </div>

      <div className="bg-[#2a263d] space-y-5  px-20 py-8 rounded-xl  mr-6">
        <div className="flex justify-between mr-6">
          <h4 className="text-lg text-green-300">Manage Users</h4>
          <Button>+ New User</Button>
        </div>
        <Table columns={columns} data={users} />
      </div>
    </div>
  );
}

export default UsersPage;
