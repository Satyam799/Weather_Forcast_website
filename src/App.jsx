import { Outlet } from "react-router-dom";
import image from "./assets/image.png";
import Clock from "./Screens/Clock";

function App() {

 
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
      <Clock/>
      <Outlet />
    </div>
  );
}

export default App;
