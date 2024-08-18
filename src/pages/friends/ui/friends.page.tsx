import { FriendsList, useGetFriends } from "@/entities/friends";
import { Loader } from "@/shared/ui/loader.tsx";
import { cn } from "@/shared/utils";
import React from "react";
import MomDuck from "@/shared/assets/duck_mom.png";
import { Page } from "@/shared/ui/page.tsx";
import {
  LargeTitle,
  Subheadline,
  Text,
  Title,
} from "@telegram-apps/telegram-ui";
import { InviteUserButton, CopyInviteLinkButton } from "@/features/invite";
import { userStore } from "@/entities/user/model/user.store";

type FriendsPageProps = {
  className?: string;
};

const TEST_DATA = {
  totalFriends: 3,
  friend: [
    {
      telegramId: 2,
      username: "Bot#2",
      scores: 200,
      tickets: 1,
    },
    {
      telegramId: 3,
      username: "Bot#3",
      scores: 100,
      tickets: 1,
    },
    {
      telegramId: 4,
      username: "Bot#4",
      scores: 100,
      tickets: 1,
    },
  ],
};

export const FriendsPage = React.memo((props: FriendsPageProps) => {
  const { className } = props;
  const { data, isError, isFetching } = useGetFriends();
  const user = userStore.use.me();

  if (isFetching) {
    return <Loader centered />;
  }

  if (isError) {
    throw new Error("Failed to fetch friends");
  }

  return (
    <Page className={cn("", className)}>
      <Title weight="1">
        <LargeTitle>Friends {data?.totalFriends}</LargeTitle>
      </Title>
      <Subheadline weight="2" className="text-center text-text-secondary mb-4">
        Invite friends <br /> to get spins and tokens
      </Subheadline>
      <img src={MomDuck} className="w-32" />
      <div className="my-2 flex items-stretch gap-1 max-w-content w-full">
        <InviteUserButton className="basis-1/2" userId={user?.id} />
        <CopyInviteLinkButton userId={user?.id} className="basis-1/2" />
      </div>
      <FriendsList
        className="mt-4 max-w-content w-full"
        friends={TEST_DATA?.friend ?? []}
      />
    </Page>
  );
});

FriendsPage.displayName = "FriendsPage";
