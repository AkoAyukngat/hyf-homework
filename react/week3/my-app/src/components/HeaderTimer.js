import React, { useEffect, useState } from "react";

const HeaderTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggleWhenClicked = () => {
    setIsActive(!isActive);
  };

  const resetButton = () => {
    setSeconds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let timeInterval = null;
    if (isActive) {
      timeInterval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(timeInterval);
    }
    return () => clearInterval(timeInterval);
  }, [isActive, seconds]);

  return (
    <div className="timer">
      <h1>OUR TO-DO APP</h1>
      <div className="time_proper"> Time Spent {seconds} seconds on App </div>
      <div className="buttons_wrap">
        <button
          className={`start_button ${isActive ? "active" : "inactive"}`}
          onClick={toggleWhenClicked}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="reset_button" onClick={resetButton}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default HeaderTimer;
