import { useNavigate } from "react-router-dom";
import { Uppost } from "./Context";
import {useRef } from "react";


function Screen() {
  const navigate = useNavigate();
  const { name, setname,handelgetcity,temp,city } = Uppost();
  const enter = useRef(null);

  function handelevent(event){
    if(event.key==="Enter"){
      if (!name || name.length <= 1) return enter.current.focus();
      handelgetcity(name)
    }
  }


  return (
    <>
    <div>
      <h1>{temp?.current_weather?.temperature}</h1>
      <h1>{city?.results[0]?.name}</h1>

    </div>
     <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <input
            ref={enter}
            type="text"
            placeholder="Enter the city name name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            onKeyDown={handelevent}
          />
          <button
            onClick={() => {
              if (!name || name?.length <= 1) return enter.current.focus();
              handelgetcity(name)
            }}
          >
            Search
          </button>
          <button
            onClick={() => {
              navigate("/screen2");
              if (!name) {
                enter.current.focus();
              }
            }}
          >
            Screen 2{" "}
          </button>
        </div>
 
    </>
  );
}

export default Screen;
