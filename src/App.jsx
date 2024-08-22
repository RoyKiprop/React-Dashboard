import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import AppNav from "./Pages/AppNav";

function App() {
  return (
    <BrowserRouter>
      <div className="flex space-x-8 ">
        <SideBar />
        <div className="w-full space-y-8">
          <Header />
          <AppNav />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
