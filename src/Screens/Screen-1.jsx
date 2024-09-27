import { useNavigate } from "react-router-dom";
import { Uppost } from "./Context";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FaTemperatureHigh } from "react-icons/fa6";
import Loader from "../utils/Loader";

const heightwindoe =window.innerHeight
const widthwindow =window.innerWidth
console.log(widthwindow,heightwindoe)

function Screen() {
  const navigate = useNavigate();
  const { name, setname, handelgetcity, temp, city, isLoading, weathercode } =
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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            flexDirection: "column",
          }}
        >
          {!temp && <div>
              <p style={{fontWeight:'bold',fontSize:50,color:'#41f80b'}}>Start searching !!</p>
            </div>}
          {temp && (
            <div
              style={{
                position: "absolute",
                width: 500,
                height: 500,
                top: weathersituation?.label.length > 6 ? 60 : -60,
                right: weathersituation?.label.length > 6 ? -200 : -80,
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 50,
                  transform: `${
                    weathersituation?.label.length > 6
                      ? "rotate(0deg)"
                      : "rotate(270deg"
                  }`,
                }}
              >
                {weathersituation?.label}
              </p>
            </div>
          )}

          {temp &&  (
            <div style={{ position: "absolute", top: 70, right: 300 }}>
              <img
                style={{ width: 200, height: 200 }}
                src={weathersituation?.image}
                alt="no image"
              />
            </div>
          )}

          <div
            style={{
              display: "flex",
              width: "95%",
              height: "10%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <p
              style={{
                fontSize: 50,
                color: "white",
                fontWeight: "revert-layer",
                textDecoration: "underline",
                textDecorationColor: "grey",
              }}
            >
              {typeof city === "object" ? city?.results[0]?.name : city}
            </p>
          </div>
          {temp && (
            <div
              style={{
                display: "flex",
                width: "60%",
                height: "20%",
                justifyContent: "flex-start",

                alignItems: "baseline",
              }}
            >
              <p
                style={{
                  fontSize: 100,
                  color: "white",
                  fontWeight: "initial",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                {temp?.current_weather?.temperature}
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  width: "30%",
                  height: "30%",
                  color: "white",
                  marginLeft: "2%",
                  fontSize: 30,
                }}
              >
                °C
              </p>
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "8%",
            }}
          >
            <input
              style={{
                width: "60%",
                height: "100%",
                borderRadius: 30,
                paddingLeft: 30,
                fontSize: 18,
                fontWeight: "bolder",
              }}
              ref={enter}
              type="text"
              placeholder="Please Enter the city name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              onKeyDown={handelevent}
            />
            <CiSearch
              size={24}
              color="black"
              style={{ position: "absolute", marginLeft: "58%" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
              width: "80vw",
              height: "5vh",
              padding: 25,
            }}
          >
            <button
              style={{
                display: "flex",
                width: "10%",
                height: "100%",
                borderRadius: 16,
                justifyContent: "space-around",
                alignItems: "center",
              }}
              onClick={() => {
                if (!name || name?.length <= 1) return enter.current.focus();
                handelgetcity(name);
              }}
            >
              Find It <FaTemperatureHigh size={24} color="red" />
            </button>
            <button
              style={{
                display: "flex",
                width: "10%",
                height: "100%",
                borderRadius: 16,
                justifyContent: "space-around",
                alignItems: "center",
              }}
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
         { temp && <div
            style={{
              display: "flex",
              width: "100%",
              height: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                height: "80%",
                borderWidth: 100,
                border: "solid",
                borderColor: "white",
                borderRadius: 50,
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "40%",
                  display: "flex",
                  justifyContent: 'space-between',
                  alignItems: "center",
                }}
              >
                <div style={{ padding: 30 }}>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "white",
                    }}
                  >
                    <p>
                      {temp?.current_weather?.windspeed}{" "}
                      {temp?.current_weather_units?.windspeed}
                    </p>
                    <p>Windspeed</p>
                  </span>
                </div>
                <div style={{ padding: 30 }}>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "white",
                    }}
                  >
                    <p>{sunrise}</p>
                    <p>Sunrise</p>
                  </span>
                </div>
                <div style={{ padding: 30 }}>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "white",
                    }}
                  >
                    <p>{sunset}</p>
                    <p>Sunset</p>
                  </span>
                </div>
              </div>
            </div>
          </div>}
        </div>
      )}
    </>
  );
}

export default Screen;

/*

 
*/
