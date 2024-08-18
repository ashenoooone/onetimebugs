import { Leaderboard, useGetLeaderboard } from "@/entities/leaderboard";
import { Loader } from "@/shared/ui/loader.tsx";
import { Page } from "@/shared/ui/page.tsx";
import { cn } from "@/shared/utils";
import React from "react";

type LeaderBoardPageProps = {
  className?: string;
};

export const LeaderBoardPage = React.memo((props: LeaderBoardPageProps) => {
  const { className } = props;
  const { data, isFetching, isError } = useGetLeaderboard();

  if (isFetching) {
    return <Loader centered />;
  }

  if (isError || !data) {
    throw new Error("Failed to fetch leaderboard");
  }

  return (
    <Page className={cn("", className)}>
      <Leaderboard leaderboard={data} />
    </Page>
  );
});

LeaderBoardPage.displayName = "LeaderBoardPage";
