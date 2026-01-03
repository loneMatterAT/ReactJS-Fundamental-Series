// Importing useState and useEffect hook
import React, {useState, useEffect} from 'react';

function DigitalClock() {

  // State variables
  const [time, setTime] = useState(new Date());

  // Using useEffect hook
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // CLEAN UP Function
    return () => {
      // We use clearInterval() function
      clearInterval(intervalId);
    }
  }, []); // start a timer only when a mount the component

  // Function to format time
  function formatTime() {
    // Get hours, minutes, and seconds of time
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12  || 12; // if the equation is 0, its equivalent to false

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridiem)}`;
  }

  // Function to pad Zero for time to make it '00' like '01, 02....'
  function padZero(number) { // parameter: number
    // We use conditions using ternary operator to check if the number is a single digit
    return (number < 10 ? "0" : "") + number;
  }

  return(
    <>
        <div className="clock-container">
            <div className="clock">
              <span>{formatTime()}</span>
            </div>
        </div>
    </>
  );
}

export default DigitalClock;