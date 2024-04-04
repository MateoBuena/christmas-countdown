import { useEffect, useState } from "react"

function App() {

  const [Days, setDays] = useState("00");
  const [Hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const christmas = new Date("dec 25, 2024 00:00:00").getTime();

  useEffect(()=>{
    setInterval(() => {
      const now = new Date().getTime();
  
      let distance = christmas - now;
  
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      setMinutes(Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)));
      setSeconds(Math.floor(distance % (1000 * 60) / (1000)));
  
    }, 1000);
  })



  return (
    <>
      <h1 className="Title">Chrismas Countdown</h1>
      <section className="section-flex">
        <article>
          <h2 className="SubTitle">Days</h2>
          <div id="days" className="counters">{Days}</div>
        </article>
        <div>:</div>
        <article>
          <h2 className="SubTitle">Hours</h2>
          <div id="hours" className="counters">{Hours}</div>
        </article>
        <div>:</div>
        <article>
          <h2 className="SubTitle">Minutes</h2>
          <div id="minutes" className="counters">{minutes}</div>
        </article>
        <div>:</div>
        <article>
          <h2 className="SubTitle">Seconds</h2>
          <div id="seconds" className="counters">{seconds}</div>
        </article>
      </section>
    </>
  )
}

export default App
