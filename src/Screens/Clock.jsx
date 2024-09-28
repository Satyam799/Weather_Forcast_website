import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa6";

function Clock() {
  const [time, settime] = useState(new Date());

  useEffect(function () {
    const interval = setInterval(() => {
      settime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
console.log('hi')
  return (
    <div
      style={{
        background: "transparent",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        height: "5%",
      }}
    >
      <div
        style={{
          display: "flex",
          background: "black",
          height: "100%",
          width: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            width: "80%",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FaClock size={24} color="yellow" />
          {time.getHours().toString().padStart(2,0)}:{time.getMinutes().toString().padStart(2,0)}:{time.getSeconds().toString().padStart(2,0)}
        </p>
      </div>
    </div>
  );
}

export default Clock;
//{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}