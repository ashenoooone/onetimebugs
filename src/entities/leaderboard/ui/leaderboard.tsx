import { cn } from "@/shared/utils/cn";
import React from "react";
import { LeaderboardType } from "../model/types";
import TrophyImg from "@/shared/assets/trophy.png";

type LeaderboardProps = {
  className?: string;
  leaderboard: LeaderboardType;
};

export const Leaderboard = React.memo((props: LeaderboardProps) => {
  const { className, leaderboard } = props;
  return (
    <div className={cn("", className)}>
      <img src={TrophyImg} alt="" />
      <div></div>
    </div>
  );
});

Leaderboard.displayName = "Leaderboard";
