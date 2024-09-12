// App.jsx
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import AppNav from "./Pages/AppNav";
import { SelectedProvider } from "./Components/context/SelectedTableItem";

function App() {
  return (
    <BrowserRouter>
      <SelectedProvider>
        <div className="flex space-x-8">
          <SideBar />
          <div className="w-full space-y-8">
            <Header />
            <AppNav />
          </div>
        </div>
      </SelectedProvider>
    </BrowserRouter>
  );
}

export default App;
