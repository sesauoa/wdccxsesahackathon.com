"use client";

import { useEffect, useState } from "react";
import { target } from "@/data/TargetDate";

export default function CountdownTimer() {
  const [hackathonTime, setHackathonTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setHackathonTime(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      {hackathonTime ? (
        <h1 className="text-6xl font-bold text-center">Hackathon Time!</h1>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold md:text-7xl leading-none">{days}</span>
            <span className="text-base md:text-xl leading-none">Days</span>
          </div>
          <span className="text-5xl md:text-7xl font-bold leading-none">:</span>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold md:text-7xl leading-none">{hours}</span>
            <span className="text-base md:text-xl leading-none">Hours</span>
          </div>
          <span className="text-5xl md:text-7xl font-bold leading-none">:</span>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold md:text-7xl leading-none">{minutes}</span>
            <span className="text-base md:text-xl leading-none">Minutes</span>
          </div>
          <span className="text-5xl md:text-7xl font-bold leading-none">:</span>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold md:text-7xl leading-none">{seconds}</span>
            <span className="text-base md:text-xl leading-none">Seconds</span>
          </div>
        </div>
      )}
    </div>
  );
}
