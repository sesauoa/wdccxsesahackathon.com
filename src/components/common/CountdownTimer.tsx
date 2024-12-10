"use client";

import { useEffect, useMemo, useState } from "react";
import { target } from "@/data/TargetDate";
import { google} from "calendar-link";
import { event } from "@/data/Calendar";
import React from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}


export default function CountdownTimer() {
  const [hackathonTime, setHackathonTime] = useState(false);


  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  
  const googleUrl = useMemo(() => google(event), [event]); 



  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });

    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap">
      {timeUnits.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold md:text-7xl leading-none">{unit.value}</span>
            <span className="text-base md:text-xl leading-none">{unit.label}</span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-5xl md:text-7xl font-bold leading-none">:</span>
          )}
        </React.Fragment>
      ))}
      
      
  <button 
    className="bg-white border rounded px-4 py-3 font-bold text-black mt-10 ;"
    onClick={() => window.open(googleUrl, "_blank")}>
      Add to Google Calendar
    </button>
    </div>

  );
}

