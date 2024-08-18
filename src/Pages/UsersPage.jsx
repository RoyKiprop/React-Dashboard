
import Table from "../Components/Table"
import UseUsers from "../customHooks/Useusers"

function UsersPage() {
    const[columns, users] = UseUsers()

  return (
    <>
      <Table columns={columns} data={users}/>
    </>
  )
}

export default UsersPage
