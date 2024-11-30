import { FriendsList, useGetFriends } from '@/entities/friends';
import { Loader } from '@/shared/ui/loader.tsx';
import { cn } from '@/shared/utils';
import React from 'react';
import { Page } from '@/shared/ui/page.tsx';
import { InviteUserButton, CopyInviteLinkButton } from '@/features/invite';
import { userStore } from '@/entities/user/model/user.store';
import { FriendsTitle } from './friends-title';

export const FriendsPage = React.memo(() => {
  const { data, isError, isFetching } = useGetFriends();
  const user = userStore.use.me();

  if (isFetching) {
    return <Loader centered />;
  }

  if (isError) {
    throw new Error('Failed to fetch friends');
  }

  return (
    <Page className={cn('items-start pt-8')}>
      <FriendsTitle totalFriends={data?.totalFriends} />
      <FriendsList
        className="mt-4 max-w-content w-full"
        friends={data?.friend ?? []}
      />
      <div className="flex px-6 w-full left-0 absolute bottom-[calc(80px+24px)] flex-col gap-2">
        <InviteUserButton className="basis-1/2" userId={user?.id} />
        <CopyInviteLinkButton userId={user?.id} className="basis-1/2" />
      </div>
    </Page>
  );
});

FriendsPage.displayName = 'FriendsPage';
