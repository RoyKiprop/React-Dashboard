import Header from "./Components/Header"
import SideBar from "./Components/SideBar"

import UsersPage from "./Pages/UsersPage"

function App() {


  return (
    <div className="flex space-x-10">
     <SideBar/>
     <div className="w-full">
      <Header/>
      <UsersPage/>
     </div>
    
    </div>
  )
}

export default App
