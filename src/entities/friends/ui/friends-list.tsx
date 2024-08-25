import { cn } from "@/shared/utils";
import React from "react";
import { FriendType } from "../model/types";
import { Friend } from "./friend";
import { Divider } from "@telegram-apps/telegram-ui";
import { Typography } from "@/shared/ui/typography";
import { Separator } from "@/shared/ui/separator";

type FriendsListProps = {
  className?: string;
  friends: FriendType[];
};

export const FriendsList = React.memo((props: FriendsListProps) => {
  const { className, friends } = props;
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {friends.length > 0 ? (
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
        <Typography className="text-center text-text-secondary" variant={"h6"}>
          Empty 😖
        </Typography>
      )}
    </div>
  );
});

FriendsList.displayName = "FriendsList";
