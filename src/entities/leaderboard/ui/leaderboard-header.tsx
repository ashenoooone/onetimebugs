import React from 'react';
import { LeaderboardType } from '../model/types';
import { Typography } from '@/shared/ui/typography';
import { Separator } from '@/shared/ui/separator';
import { cn } from '@/shared/utils';

type LeaderboardHeaderProps = {
  leaderboard: LeaderboardType;
  className?: string;
};

export const LeaderboardHeader = React.memo((props: LeaderboardHeaderProps) => {
  const { leaderboard, className } = props;

  return (
    <div className={cn(className, 'flex flex-col')}>
      <Typography variant={'h3'} className="font-bold">
        LEADERBOARD
      </Typography>
      <Typography variant={'h6'} className="text-d-gray">
        {leaderboard.totalUsers} users
      </Typography>
      <div className="mt-8 text-d-green flex items-end gap-2">
        <Typography variant={'h6'} className="shrink-0">
          YOUR POSITION
        </Typography>
        <Separator variant="dashed" className="border-d-green flex-1" />
        <Typography variant={'h6'} className="shrink-0">
          #{leaderboard.me.position}
        </Typography>
      </div>
    </div>
  );
});

LeaderboardHeader.displayName = 'LeaderboardHeader';
