import { cn } from '@/shared/utils';
import React from 'react';
import { FriendType } from '../model/types';
import { getUserAvatar } from '@/entities/user';
import { Avatar, Text } from '@telegram-apps/telegram-ui';
import { Typography } from '@/shared/ui/typography';

type FriendProps = {
  className?: string;
  item: FriendType;
};

export const Friend = React.memo((props: FriendProps) => {
  const { className, item } = props;
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div className="flex flex-col">
        <Typography className="uppercase" variant={'h6'}>
          {item.username}
        </Typography>
        <Typography className="text-d-gray" variant={'subtitle-1'}>
          BUGS {item.balance}
        </Typography>
      </div>
      <div className="flex gap-1 flex-col font-onest">
        <Typography variant={'h6'} className="text-d-green">
          BUGS +{item.scores}
        </Typography>
        <Typography variant={'h6'} className="text-d-green">
          +{item.tickets} TICKETS
        </Typography>
      </div>
    </div>
  );
});

Friend.displayName = 'Friend';
