import MapComponent from "../Components/map";
import { Map } from "@mui/icons-material";

function MapPage() {
  return (
    <div className="space-y-8 min-h-screen flex flex-col"> 
      <div className="flex space-x-1 items-center">
        <Map className="text-green-300" />
        <h1 className="text-2xl text-green-300 font-bold">MAP</h1>
      </div>

      <div className="bg-[#2a263d] space-y-5 p-5 rounded-xl flex-1 flex flex-col">
        <h4 className="text-lg text-green-300">Manage Locations</h4>
        <div className="flex-1  h-screen">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default MapPage;


