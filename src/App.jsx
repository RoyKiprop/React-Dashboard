import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import AppNav from "./Pages/AppNav";

function App() {
  return (
    <BrowserRouter>
      <div className="flex space-x-10">
        <SideBar />
        <div className="w-full">
          <Header />
          <AppNav />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
