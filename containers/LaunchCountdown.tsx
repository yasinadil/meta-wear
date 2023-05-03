"use client";
import React, { useEffect, useMemo, useState } from "react";
import Countdown from "../components/Countdown/Countdown";

const LaunchCountdown = () => {
  const unixTimestamp = Math.floor(Date.now());
  const dest = 1683212400000;
  // const dest = 1683128018000;
  const timestamp = (dest - unixTimestamp) / 1000;
  const days = Math.floor(timestamp / 86400);

  const hours = Math.floor((timestamp % 86400) / 3600);

  const minutes = Math.floor((timestamp % 3600) / 60);

  const seconds = Math.floor(timestamp % 60);

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
    <div className="">
      {days >= 0 || hours >= 0 || minutes >= 0 || seconds >= 0 ? (
        <div className="mt-4">
          <p className="text-center text-2xl text-white font-semibold mb-4 tracking-wider">
            Mint will be available in:
          </p>
          <div className="flex justify-center gap-x-4">
            <Countdown prev={0} count={remainTime.days} label={"days"} />
            <Countdown prev={0} count={remainTime.hours} label={"hours"} />
            <Countdown prev={0} count={remainTime.minutes} label={"minutes"} />
            <Countdown prev={0} count={remainTime.seconds} label={"seconds"} />
          </div>
        </div>
      ) : (
        <p className="text-center text-2xl text-white font-semibold mb-4 tracking-wider">
          &apos;Hex Gen 1 Bags&apos; NFT collection is now ready for mint!
        </p>
      )}
    </div>
  );
};

export default LaunchCountdown;
