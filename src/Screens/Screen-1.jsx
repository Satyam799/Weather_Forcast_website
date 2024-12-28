import { Uppost } from "./Context";
import Loader from "../utils/Loader";
import Whenlocation from "../Component/Whenlocation";
import Nolocation from "../Component/Nolocation";
import Clock from "./Clock";

function Screen() {
  const { isLoading, temp } = Uppost();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="s1main">
                <Clock/>
          
          {temp ? <Whenlocation /> : <Nolocation />}
          </div>
      )}
    </>
  );
}

export default Screen;
