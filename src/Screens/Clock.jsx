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
  return (
      <div className="clock">
                  <FaClock size={24} color="yellow" />

        <p>
          {time.getHours().toString().padStart(2,0)}:{time.getMinutes().toString().padStart(2,0)}:{time.getSeconds().toString().padStart(2,0)}
        </p>
      </div>
  );
}

export default Clock;
//{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}