import { useNavigate } from "react-router-dom";
import Clock from "./Clock";
import { Uppost } from "./Context";
import "./second.css";
import { IoArrowBackSharp } from "react-icons/io5";

function Screen2() {
  const { temp, city, weathercode } = Uppost();
  const navigate=useNavigate()
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
    <>
      {" "}
      <Clock />
      <button  className="backbutton" onClick={()=>navigate('/')}>
      <IoArrowBackSharp  size={24}/>

        {`Back`}
        </button>
      <div className="secondstart">
        <div className="Citynameheading">
          <p>{city?.results[0]?.name}</p>
        </div>
        <div className="ar">
          {datacreation.map((el, i) => {
            const imagee = weathercode(el?.weathercode);
            return (
              <div key={i} className="eachday">
                <img src={imagee?.image} alt="no image" className="image5" />
                <p>{daysOfWeek[el.time.getDay()]}</p>
                <p>{`${(el.time.getMonth() + 1)
                  .toString()
                  .padStart(2, 0)}/${el.time
                  .getDate()
                  .toString()
                  .padStart(2, 0)}`}</p>
                <p>{el.temperature}°C</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Screen2;
