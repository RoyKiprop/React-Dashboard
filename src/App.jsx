import Header from "./Components/Header"
import SideBar from "./Components/SideBar"
import OrdersPage from "./Pages/OrdersPage"



function App() {


  return (
    <div className="flex space-x-10">
     <SideBar/>
     <div className="w-full">
      <Header/>
      <OrdersPage/>
     
     </div>
    
    </div>
  )
}

export default App
