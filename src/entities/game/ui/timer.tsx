import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/utils";
import React from "react";
import { CountdownRenderProps } from "react-countdown";
import "./timer.css";

type TimerProps = {
  className?: string;
  time: CountdownRenderProps;
  magicNumber: number;
};

export const Timer = (props: TimerProps) => {
  const { className, time, magicNumber } = props;
  const formattedSeconds = String(magicNumber - time.seconds).padStart(3, "0");
  const formattedMilliseconds = String(999 - time.milliseconds).padStart(
    3,
    "0"
  );
  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-1 bg-bg-tertiary rounded-2xl font-digital border-2 border-bg-modal",
        className
      )}
    >
      <div
        className="bg-red-950/80 stripes text-red-600 p-4 rounded-2xl relative after:absolute
        after:inset-0 after:content-[' '] after:bg-gradient-to-r after:from-black/30 after:via-red-600/10 after:rounded-2xl after:to-black/30"
      >
        <Typography className="font-bold" variant={"h4"}>
          {formattedSeconds}:{formattedMilliseconds}
        </Typography>
      </div>
    </div>
  );
};

Timer.displayName = "Timer";
