import { cn } from '@/shared/utils';
import React from 'react';
import { FriendType } from '../model/types';
import { Friend } from './friend';
import { Divider } from '@telegram-apps/telegram-ui';
import { Typography } from '@/shared/ui/typography';
import { Separator } from '@/shared/ui/separator';
import { PaperPlane } from '@/shared/icons/paper-plane';

type FriendsListProps = {
  className?: string;
  friends: FriendType[];
};

export const FriendsList = React.memo((props: FriendsListProps) => {
  const { className, friends } = props;
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {friends.length < 0 ? (
        friends.map((friend, index) => {
          const content = (
            <>
              {index !== 0 && <Separator />}
              <Friend item={friend} key={friend.telegramId} />
            </>
          );
          return content;
        })
      ) : (
        <div className="flex flex-col gap-1 items-center absolute -translate-y-1/2 left-1/2 top-1/2 -translate-x-1/2">
          <PaperPlane className="text-d-green" />
          <Typography className="text-center" variant={'h5'}>
            Invite friends to get <br /> spins and tokens
          </Typography>
        </div>
      )}
    </div>
  );
});

FriendsList.displayName = 'FriendsList';
