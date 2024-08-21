import { Game, Timer } from "@/entities/game";
import { gameStore } from "@/entities/game/model/game.store";
import { WithUserInit } from "@/entities/user";
import { userStore } from "@/entities/user/model/user.store";
import { Page } from "@/shared/ui/page";
import { cn } from "@/shared/utils";
import React from "react";
import Countdown from "react-countdown";

type GamePageProps = {
  className?: string;
};

export const GamePage = React.memo((props: GamePageProps) => {
  const { className } = props;
  const user = userStore.use.me();
  const magicNumber = gameStore.use.magicNumber?.();

  if (!user) {
    throw new Error("User not found");
  }

  return (
    <WithUserInit>
      <Page className={cn("", className)}>
        <Countdown
          date={Date.now() + (magicNumber || 10) * 1000}
          precision={3}
          intervalDelay={0}
          renderer={(props) => <Game time={props} />}
        />
      </Page>
    </WithUserInit>
  );
});

GamePage.displayName = "GamePage";
