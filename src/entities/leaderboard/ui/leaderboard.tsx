import { cn } from "@/shared/utils/cn";
import React from "react";
import { LeaderboardType } from "../model/types";
import TrophyImg from "@/shared/assets/trophy.png";
import { Title, Headline } from "@telegram-apps/telegram-ui";

type LeaderboardProps = {
  className?: string;
  leaderboard: LeaderboardType;
};

export const Leaderboard = React.memo((props: LeaderboardProps) => {
  const { className, leaderboard } = props;
  return (
    <div className={cn("", className)}>
      <div className="flex flex-col items-center">
        <img src={TrophyImg} alt="Трофей" className="w-24 h-24" />
        <Title weight="1" level="1">
          Leaderboard
        </Title>
        <Headline>Your position is #{leaderboard.me.position}</Headline>
      </div>
    </div>
  );
});

Leaderboard.displayName = "Leaderboard";
