import React, { useMemo } from "react";
import { LeaderboardType } from "../model/types";
import { Headline, Title, Subheadline } from "@telegram-apps/telegram-ui";
import TrophyImg from "@/shared/assets/trophy.png";
import { Typography } from "@/shared/ui/typography";

type LeaderboardHeaderProps = {
  leaderboard: LeaderboardType;
};

export const LeaderboardHeader = React.memo((props: LeaderboardHeaderProps) => {
  const { leaderboard } = props;

  const userPosition = useMemo(() => {
    if (leaderboard.me.position === 1) {
      return <span className="text-yellow font-bold">1 🥇</span>;
    }
    if (leaderboard.me.position === 2) {
      return <span className="text-gray-400 font-bold">2 🥈</span>;
    }
    if (leaderboard.me.position === 3) {
      return <span className="text-amber-600 font-bold">3 🥉</span>;
    }
    return leaderboard.me.position;
  }, []);

  return (
    <div className="flex flex-col items-center">
      <img src={TrophyImg} alt="Трофей" className="w-24 h-24" />
      <Typography variant={"h4"} className="font-bold">
        Leaderboard
      </Typography>
      <Typography variant={"h6"}>Your position is {userPosition}</Typography>
      <Typography variant={"h6"}>
        Total users: {leaderboard.totalUsers}
      </Typography>
    </div>
  );
});

LeaderboardHeader.displayName = "LeaderboardHeader";
