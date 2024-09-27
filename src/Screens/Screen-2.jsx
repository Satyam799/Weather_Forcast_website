import { Uppost } from "./Context";

function Screen2() {
  const { name, setname, handelgetcity, temp, city, isLoading, weathercode } =
    Uppost();

  const datacreation = temp?.daily?.temperature_2m_max.map((el, index) => ({
    temperature: el,
    weathercode: temp?.daily?.weathercode[index],
    time: new Date(temp?.daily?.time[index]),
  }));

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <p
          style={{
            color: "grey",
            fontWeight: "bold",
            fontSize: 40,
            textDecoration: "underline",
            textDecorationColor: "red",
            
          }}
        >
          {city?.results[0]?.name}
        </p>
      </div>
      <div
        style={{
          width: "100%",
          height: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {datacreation.map((el, i) => {
          const imagee = weathercode(el?.weathercode);
          console.log(el.time);
          return (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ paddingRight: 50, width: "10%", height: "10%" }}
                src={imagee?.image}
                alt="no image"
              />
              <p
                style={{
                  paddingRight: 50,
                  width:150,
                  height:100,
                  color: "yellow",
                  fontWeight: "bold",
                  fontSize: 25,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {daysOfWeek[el.time.getDay()]}
              </p>
              <p
                style={{
                  paddingRight: 50,
                  color: "yellow",
                  fontWeight: "bold",
                  fontSize: 25,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >{`${(el.time.getMonth() + 1).toString().padStart(2, 0)}/${el.time
                .getDate()
                .toString()
                .padStart(2, 0)}`}</p>
              <p
                style={{
                  paddingRight: 50,
                  color: "yellow",
                  fontWeight: "bold",
                  fontSize: 25,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {el.temperature}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Screen2;
