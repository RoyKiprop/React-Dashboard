import Header from "./Components/Header"
import SideBar from "./Components/SideBar"
import Table from "./Components/Table"

function App() {


  return (
    <div className="flex space-x-10">
     <SideBar/>
     <div className="w-full">
      <Header/>
      <Table/>
     </div>
    
    </div>
  )
}

export default App
