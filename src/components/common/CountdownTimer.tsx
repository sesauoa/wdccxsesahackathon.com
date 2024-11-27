"use client";

import { clear } from "console";
import { useEffect, useState } from "react"
import '@/styles/timer.css';


export default function CountdownTimer() {

    const[hackathonTime, setHackathonTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    useEffect(() => {

    const target = new Date("12/31/2024 23:59:59");

    const interval = setInterval(() => {
    const now = new Date();
    const differnce = target.getTime() - now.getTime();

    const d = Math.floor(differnce / (1000 * 60 * 60 * 24));
    setDays(d);

    const h = Math.floor(
        (differnce % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    setHours(h);

    const m = Math.floor(
        (differnce % (1000 * 60 * 60)) / (1000 * 60)
    );
    setMinutes(m);

    const s = Math.floor((differnce % (1000 * 60)) / 1000);
    setSeconds(s);


    if(d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setHackathonTime(true);
        clearInterval(interval);
    }
        }, 1000)


    return () => clearInterval(interval)
    }, []);

    // return (
    //     <div className={styles.container}>
    //         <Head>
    //             <title>Countdown Timer</title>
    //             <meta name="description" content="Countdown Timer" />
    //             <link rel="icon" href="/favicon.ico" />
    //         </Head>
    
    return (
        <div className="countdown-timer">

    {hackathonTime ? (
        <h1>Hackathon Time!</h1>
        
    ) : (
        
    <div className="timer-wrapper">
        <div className="timer-inner">

    <div className="timer-segment">
        <span className="time">{days}</span>
        <span className="label">Days</span>
    </div>
    <span className="divider">:</span>
    <div className="timer-segment">
        <span className="time">{hours}</span>
        <span className="label">Hours</span>
    </div>
    <span className="divider">:</span>
    <div className="timer-segment">
        <span className="time">{minutes}</span>
        <span className="label">Minutes</span>
    </div>
    <span className="divider">:</span>
    <div className="timer-segment">
        <span className="time">{seconds}</span>
        <span className="label">Seconds</span>
    </div>

        </div>
    </div>
    )}
    </div>
     );

}