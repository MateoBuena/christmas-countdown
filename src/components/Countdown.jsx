import { useEffect, useState } from "react"

export const Countdown = ({ ValueHour, ValueMinute, ValueSecond, ValueStart }) => {

    const counter_hours = document.getElementById("counter_hours");
    const counter_minutes = document.getElementById("counter_minutes");
    const counter_seconds = document.getElementById("counter_seconds");

    let hours;
    let minutes;
    let seconds;

    if (ValueHour < 10) {
        hours = '0' + ValueHour;
    } else {
        hours = ValueHour;
    }

    if (ValueMinute < 10) {
        minutes = '0' + ValueMinute;
    } else {
        minutes = ValueMinute;
    }

    if (ValueSecond < 10) {
        seconds = '0' + ValueSecond;
    } else {
        seconds = ValueSecond;
    }

    useEffect((ValueStart) => {
        if (ValueStart) {
            setInterval((hours, minutes, seconds) => {
                seconds--;
                if (seconds == 0) {
                    seconds = 60;
                    minutes--;
                }

                if (minutes == 0) {
                    minutes = 60;
                    hours--;
                    if (hours <= 0) {
                        hours = 0;
                    }
                }
                counter_hours.innerHTML = hours;
                counter_minutes.innerHTML = minutes;
                counter_seconds.innerHTML = seconds;
            }, 1000);

        }
    },ValueStart)


    return (
        <>
            <form>
                <section className="countdown_container">
                    <div className="counter" id="counter_hours">{hours}</div>
                    <div className="points">:</div>
                    <div className="counter" id="counter_minutes">{minutes}</div>
                    <div className="points">:</div>
                    <div className="counter" id="counter_seconds">{seconds}</div>
                </section>
            </form>
        </>
    )
}
