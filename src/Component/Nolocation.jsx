import { Uppost } from "../Screens/Context";
import { useRef } from "react";
import { FaTemperatureHigh } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

function Nolocation() {
  const {
    name,
    setname,
    handelgetcity,
  } = Uppost();
  const enter = useRef(null);

  function handelevent(event) {
    if (event.key === "Enter") {
      if (!name || name.length <= 1) return enter.current.focus();
      handelgetcity(name);
    }
  }

  return (
    <div className="unique">
      <div>
        <p className="peragraph">Start searching !!</p>
      </div>
      <div className="searchlevel">
        <div className="forposiioning">
        <input
          className="inputt"
          ref={enter}
          type="text"
          placeholder={" Please Enter the city name"}
          value={name}
          onChange={(e) => setname(e.target.value)}
          onKeyDown={handelevent}
        />
        <CiSearch size={24} color="black" className="searchicone" />

        </div>
      </div>
      <div className="finding">
        <button
        className="findbutton"
          onClick={() => {
            if (!name || name?.length <= 1) return enter.current.focus();
            handelgetcity(name);
          }}
        >
          Find It <FaTemperatureHigh size={18} color="red" />
        </button>
      </div>
    </div>
  );
}

export default Nolocation;
