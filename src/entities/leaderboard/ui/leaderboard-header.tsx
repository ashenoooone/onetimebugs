import React, { useMemo } from "react";
import { LeaderboardType } from "../model/types";
import { Headline, Title, Subheadline } from "@telegram-apps/telegram-ui";
import TrophyImg from "@/shared/assets/trophy.png";

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
      <Title weight="1" level="1">
        Leaderboard
      </Title>
      <Headline weight="2">Your position is {userPosition}</Headline>
      <Subheadline weight="2">
        Total users: {leaderboard.totalUsers}
      </Subheadline>
    </div>
  );
});

LeaderboardHeader.displayName = "LeaderboardHeader";
