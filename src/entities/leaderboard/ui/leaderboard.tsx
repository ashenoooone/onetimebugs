import { cn } from "@/shared/utils/cn";
import React from "react";
import { LeaderboardType } from "../model/types";
import { LeaderboardHeader } from "./leaderboard-header";
import { LeaderboardItem } from "./leaderboard-item";

type LeaderboardProps = {
  className?: string;
  leaderboard: LeaderboardType;
};

export const Leaderboard = React.memo((props: LeaderboardProps) => {
  const { className, leaderboard } = props;

  return (
    <div className={cn("max-w-[500px] w-full", className)}>
      <LeaderboardHeader leaderboard={leaderboard} />
      <div className="flex flex-col gap-4 mt-4">
        {leaderboard.users.map((user) => {
          return <LeaderboardItem key={user.telegramId} user={user} />;
        })}
      </div>
    </div>
  );
});

Leaderboard.displayName = "Leaderboard";
