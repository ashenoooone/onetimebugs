import { cn } from "@/shared/utils";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { gameStore } from "../model/game.store";
import Fire from "@/shared/assets/fire.png";
import { Typography } from "@/shared/ui/typography";

type GameLoadingProps = {
  className?: string;
};

export const GameLoading = React.memo((props: GameLoadingProps) => {
  const { className } = props;
  const [currentTime, setCurrentTime] = useState<number>(1);
  const setGameStatus = gameStore.use.setGameStatus();

  const timerRef = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentTime((time) => time + 1);
    }, 900);
  }, []);

  useEffect(() => {
    if (currentTime === 5) {
      setGameStatus("inGame");
      setCurrentTime(0);
    }
  }, [currentTime]);

  const content = useMemo(() => {
    if (currentTime === 1) {
      return (
        <Typography
          variant={"h5"}
          className="font-bold duration-500 animate-ping"
        >
          {currentTime} <br />
        </Typography>
      );
    }
    if (currentTime === 2) {
      return (
        <Typography
          variant={"h5"}
          className="font-bold duration-500 animate-ping"
        >
          {currentTime} <br />
        </Typography>
      );
    }
    if (currentTime === 3) {
      return (
        <Typography
          variant={"h5"}
          className="font-bold duration-500 animate-ping"
        >
          {currentTime} <br />
        </Typography>
      );
    }
    return (
      <Typography
        variant={"h5"}
        className="font-bold duration-500 animate-ping"
      >
        🔥 LETS GO 🔥
      </Typography>
    );
  }, [currentTime]);

  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center",
        className
      )}
    >
      {content}
    </div>
  );
});

GameLoading.displayName = "GameLoading";
