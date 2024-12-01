import { cn } from '@/shared/utils';
import React from 'react';
import { LeaderBoardUserType } from '../model/types';
import { Typography } from '@/shared/ui/typography';
import { formatNumber } from '@/shared/utils/format-number';

type LeaderboardItemProps = {
  user: LeaderBoardUserType;
  currentUser: LeaderBoardUserType;
};

export const LeaderboardItem = React.memo((props: LeaderboardItemProps) => {
  const { user, currentUser } = props;

  return (
    <div
      className={cn(
        'flex p-2 justify-between items-center w-full cursor-pointer border-b border-d-gray-dark',
      )}
    >
      <div className="flex gap-3.5 items-center">
        <Typography
          variant={'h6'}
          className={cn(
            'w-8 h-8 flex items-center justify-center bg-d-gray-dark',
            {
              'bg-first-place': user.position === 1,
              'bg-second-place': user.position === 2,
              'bg-third-place': user.position === 3,
            },
          )}
        >
          {user.position}
        </Typography>
        <div className="flex flex-col">
          <Typography variant={'subtitle-2'} className="font-bold uppercase">
            {user.username}
          </Typography>
          <Typography variant={'subtitle-2'} className="text-d-gray font-onest">
            BUGS {formatNumber(user.balance)}
          </Typography>
        </div>
      </div>
    </div>
  );
});

LeaderboardItem.displayName = 'LeaderboardItem';
