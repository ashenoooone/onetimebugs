import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/utils";
import React, { useMemo } from "react";
import { CountdownRenderProps } from "react-countdown";
import { gameStore } from "../model/game.store";
import { GameIdle } from "./game-idle";
import { GameLoading } from "./game-loading";
import { GameInGame } from "./game-in-game";
import { Timer } from "./timer";
type GameProps = {
  className?: string;
  time: CountdownRenderProps;
};

export const Game = (props: GameProps) => {
  const { className, time } = props;
  const gameStatus = gameStore.use.status();
  const magicNumber = gameStore.use.magicNumber?.();

  const content = useMemo(() => {
    if (gameStatus === "idle") {
      return <GameIdle />;
    }
    if (gameStatus === "loading") {
      return <GameLoading />;
    }
    return <GameInGame time={time} />;
  }, [gameStatus]);

  return (
    <div
      className={cn("absolute bottom-1/2 left-1/2 -translate-x-1/2", className)}
    >
      {gameStatus === "inGame" && magicNumber && (
        <Timer magicNumber={magicNumber} time={time} />
      )}
      {content}
    </div>
  );
};

Game.displayName = "Game";
