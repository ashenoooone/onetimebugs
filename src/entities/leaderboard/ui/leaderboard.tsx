import { cn } from '@/shared/utils/cn';
import React from 'react';
import { LeaderboardType } from '../model/types';
import { LeaderboardHeader } from './leaderboard-header';
import { LeaderboardItem } from './leaderboard-item';

type LeaderboardProps = {
  className?: string;
  leaderboard: LeaderboardType;
};

export const Leaderboard = React.memo((props: LeaderboardProps) => {
  const { className, leaderboard } = props;

  return (
    <div className={cn('flex flex-col w-full', className)}>
      <LeaderboardHeader className="mb-6" leaderboard={leaderboard} />
      <div className="flex flex-col mt-4">
        {leaderboard.users.map((user) => {
          return (
            <LeaderboardItem
              currentUser={leaderboard.me}
              key={user.telegramId}
              user={user}
            />
          );
        })}
      </div>
      <div className="h-navbar" />
    </div>
  );
});

Leaderboard.displayName = 'Leaderboard';
