'use client';

import { useEffect, useMemo, useState } from 'react';
import { target } from '@/data/Calendar';
import { google } from 'calendar-link';
import { event } from '@/data/Calendar';
import React from 'react';
import { cn } from '@/lib/clsx';
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps extends React.HTMLAttributes<HTMLElement> {}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  className,
  ...props
}) => {
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

      if (difference < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      {...props}
      className={cn(
        'flex min-h-0 flex-col items-center justify-center p-4',
        className
      )}
    >
      <h1 className="h-0 text-3xl">AUG 2-3, 2025</h1>

      <div className="flex h-40 flex-wrap items-center justify-center gap-4">
        {timeUnits.map((unit, index) => (
          <React.Fragment key={unit.label}>
            <div className="flex h-16 flex-col items-center">
              <span className="text-5xl font-bold leading-none md:text-8xl">
                {unit.value}
              </span>
              <span className="text-base leading-tight md:text-xl">
                {unit.label}
              </span>
            </div>
            {index < timeUnits.length - 1 && (
              <span className="text-5xl font-bold leading-none md:text-7xl">
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      <button
        className="rounded border bg-white px-4 py-3 font-bold text-black hover:bg-gray-100 md:mt-10"
        onClick={() => window.open(googleUrl, '_blank')}
      >
        Add to Google Calendar
      </button>
    </div>
  );
};
