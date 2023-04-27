"use client";
import React, { useEffect, useMemo, useState } from "react";
import Countdown from "../components/Countdown/Countdown";

const LaunchCountdown = ({ days, hours, minutes, seconds }: any) => {
  const [time, setTime] = useState(
    days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds
  );

  const remainTime = useMemo(() => {
    const days = Math.floor(time / 24 / 3600);
    const hours = Math.floor((time - days * 24 * 3600) / 3600);
    const minutes = Math.floor((time - days * 24 * 3600 - hours * 3600) / 60);
    const seconds = (time - days * 24 * 3600 - hours * 3600) % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time: any) => (time !== 0 ? time - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-x-4">
      <Countdown prev={0} count={remainTime.days} label={"days"} />
      <Countdown prev={0} count={remainTime.hours} label={"hours"} />
      <Countdown prev={0} count={remainTime.minutes} label={"minutes"} />
      <Countdown prev={0} count={remainTime.seconds} label={"seconds"} />
    </div>
  );
};

export default LaunchCountdown;
