import { Leaderboard, useGetLeaderboard } from "@/entities/leaderboard";
import { Loader } from "@/shared/components/loader";
import { Page } from "@/shared/components/page";
import { cn } from "@/shared/utils";
import React from "react";

type LeaderBoardPageProps = {
  className?: string;
};

// const data = {
//   totalUsers: 7,
//   me: {
//     position: 1,
//     balance: 1000,
//     telegramId: 3,
//     username: "username",
//   },
//   users: [
//     {
//       telegramId: 3,
//       username: "username",
//       position: 1,
//       balance: 1400,
//     },
//     {
//       telegramId: 2,
//       username: "username",
//       position: 2,
//       balance: 1200,
//     },
//     {
//       telegramId: 6,
//       username: "username",
//       position: 3,
//       balance: 1000,
//     },
//     {
//       telegramId: 1,
//       username: "username",
//       position: 4,
//       balance: 1000,
//     },
//     {
//       telegramId: 7,
//       username: "username",
//       position: 5,
//       balance: 1000,
//     },
//     {
//       telegramId: 4,
//       username: "username",
//       position: 6,
//       balance: 1000,
//     },
//     {
//       telegramId: 5,
//       username: "username",
//       position: 7,
//       balance: 800,
//     },
//   ],
// };

export const LeaderBoardPage = React.memo((props: LeaderBoardPageProps) => {
  const { className } = props;
  const { data, isFetching, isError } = useGetLeaderboard();

  if (isFetching) {
    return (
      <Loader
        imageStyles="w-20 h-20"
        className="w-full h-screen flex items-center justify-center"
      />
    );
  }

  if (isError) {
    return null;
  }

  return (
    <Page className={cn("", className)}>
      <Leaderboard leaderboard={data} />
    </Page>
  );
});

LeaderBoardPage.displayName = "LeaderBoardPage";
