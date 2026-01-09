import { useState, useEffect } from "react";
import Light from "./Light";
import "./styles.css";

const TIME_MAP = {
  1: 5,
  2: 2,
  3: 7,
};

export default function App() {
  const [active, setActive] = useState(1);
  const [time, setTime] = useState(5);

  const color1 = "red";
  const color2 = "yellow";
  const color3 = "green";
  const color4 = "black";

  useEffect(() => {
    setTime(TIME_MAP[active]);
    const newTime = setInterval(() => {
      setTime((prev) => {
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(newTime);
    };
  }, [active]);

  useEffect(() => {
    if (time === 0) {
      setActive((prev) => {
        return prev === 3 ? 1 : prev + 1;
      });
    }
  }, [time]);

  return (
    <div className="traffic-light">
      <Light
        color={active === 1 ? color1 : color4}
        {...(active === 1 ? { time: time } : {})}
      />
      <Light
        color={active === 2 ? color2 : color4}
        {...(active === 2 ? { time: time } : {})}
      />
      <Light
        color={active === 3 ? color3 : color4}
        {...(active === 3 ? { time: time } : {})}
      />
    </div>
  );
}
