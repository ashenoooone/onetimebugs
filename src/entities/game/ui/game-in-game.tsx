import { cn } from "@/shared/utils";
import React, { useCallback, useEffect, useState } from "react";
import { CountdownRenderProps } from "react-countdown";
import { usePostFinishGame, usePostStartGame } from "../model/hooks";
import { Typography } from "@/shared/ui/typography";
import { Loader } from "@/shared/ui/loader";
import { Button } from "@/shared/ui/button";
import { Timer } from "./timer";
import { gameStore } from "../model/game.store";
import { GameResultModal } from "./game-result.modal";

type GameInGameProps = {
  className?: string;
  time: CountdownRenderProps;
};

export const GameInGame = (props: GameInGameProps) => {
  const { className, time } = props;
  const [reward, setReward] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const magicNumber = gameStore.use.magicNumber?.();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const startGame = usePostStartGame();

  const finishGame = usePostFinishGame();

  const setMagicNumber = gameStore.use.setMagicNumber();

  useEffect(() => {
    startGame.mutateAsync().then((res) => {
      setReward(null);
      setStartTime(Date.now());
      setMagicNumber(res.data.magicNumber);
      time.api.start();
    });
  }, []);

  const handleFinishGameClick = useCallback(() => {
    time.api.pause();
    const resultTime = Date.now() - startTime! + 1000;
    finishGame
      .mutateAsync({
        userTime: resultTime / 1000,
      })
      .then((res) => {
        setReward(res.data.reward);
        setIsModalOpen(true);
      });
  }, [finishGame, time, startTime]);

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <Typography variant={"h6"}>
        Your magic number is{" "}
        <span className="font-bold text-special-yellow">
          {startGame.data?.data.magicNumber}
        </span>
        !
      </Typography>
      <Button variant={"default"} onClick={handleFinishGameClick}>
        ⚠️ STOP ⚠️
      </Button>
      {reward && <GameResultModal open={isModalOpen} reward={reward} />}
    </div>
  );
};

GameInGame.displayName = "GameInGame";
