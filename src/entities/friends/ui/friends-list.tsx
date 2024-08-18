import { cn } from "@/shared/utils";
import React from "react";
import { FriendType } from "../model/types";
import { Friend } from "./friend";
import { Divider } from "@telegram-apps/telegram-ui";

type FriendsListProps = {
  className?: string;
  friends: FriendType[];
};

export const FriendsList = React.memo((props: FriendsListProps) => {
  const { className, friends } = props;
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {friends.map((friend, index) => {
        const content = (
          <>
            {index !== 0 && <Divider />}
            <Friend item={friend} key={friend.telegramId} />
          </>
        );
        return content;
      })}
    </div>
  );
});

FriendsList.displayName = "FriendsList";
