import { Outlet } from "react-router-dom";
import image from "./assets/image.png";
import Clock from "./Screens/Clock";
import { Uppost } from "./Screens/Context";

function App() {

  const  {zoomelevel}=Uppost()

return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        flex:1,
        height:'100vh',
      }}
    >
      {zoomelevel <1.875 && <Clock/>}
      <Outlet />
    </div>
  );
}

export default App;
