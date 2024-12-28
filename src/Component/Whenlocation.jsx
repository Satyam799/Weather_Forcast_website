import { useNavigate } from "react-router-dom";
import { Uppost } from "../Screens/Context";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FaTemperatureHigh } from "react-icons/fa6";

function Whenlocation() {
  const navigate = useNavigate();
  const { name, setname, handelgetcity, temp, city, weathercode, zoomelevel } =
    Uppost();
  const enter = useRef(null);

  function handelevent(event) {
    if (event.key === "Enter") {
      if (!name || name.length <= 1) return enter.current.focus();
      handelgetcity(name);
    }
  }

  const weathersituation = weathercode(temp?.current_weather?.weathercode);

  const sunrise = temp?.daily?.sunrise[0].split("T")[1];
  const sunset = temp?.daily?.sunset[0].split("T")[1];
  return (
    <div className="unique">
      <div className="lable">
        <p className="lablep">{weathersituation?.label}</p>
      </div>
      <div className="imagename">
        <div className="cityname">
          <p className="cityp">
            {typeof city === "object" ? city?.results[0]?.name : city}
          </p>

          <div>
            {
              <img
                src={weathersituation?.image}
                alt="no image"
                className="image2"
              />
            }
          </div>
        </div>
      </div>
      <div className="temperature">
        <div className="temperaturemini">
          <p>{temp?.current_weather?.temperature}</p>
          <p className="c">°C</p>
        </div>
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
      <div className="finding2">
        <button
          className="findbutton"
          onClick={() => {
            if (!name || name?.length <= 1) return enter.current.focus();
            handelgetcity(name);
          }}
        >
          Find It {<FaTemperatureHigh size={10} color="red" />}
        </button>
        <button
          className="findbutton"
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

      <div className="borders">
        <div className="aggarngemant">
            <div>
              <span>
                <p>
                  {temp?.current_weather?.windspeed}{" "}
                  {temp?.current_weather_units?.windspeed}
                </p>
                <p>Windspeed</p>
              </span>
            </div>
            <div>
              <span>
                <p>{sunrise}</p>
                <p>Sunrise</p>
              </span>
            </div>
            <div>
              <span>
                <p>{sunset}</p>
                <p>Sunset</p>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Whenlocation;
