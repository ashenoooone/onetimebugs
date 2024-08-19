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
import { Typography } from "@/shared/ui/typography";

export const FriendsPage = React.memo(() => {
  const { data, isError, isFetching } = useGetFriends();
  const user = userStore.use.me();

  if (isFetching) {
    return <Loader centered />;
  }

  if (isError) {
    throw new Error("Failed to fetch friends");
  }

  return (
    <Page className={cn("")}>
      <Typography variant={"h4"}>Friends {data?.totalFriends}</Typography>
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
        friends={data?.friend ?? []}
      />
    </Page>
  );
});

FriendsPage.displayName = "FriendsPage";
