import { cn } from "@/shared/utils";
import React from "react";
import { FriendType } from "../model/types";
import { getUserAvatar } from "@/entities/user";
import { Avatar, Text } from "@telegram-apps/telegram-ui";

type FriendProps = {
  className?: string;
  item: FriendType;
};

export const Friend = React.memo((props: FriendProps) => {
  const { className, item } = props;
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex items-center">
        <Avatar size={48} src={getUserAvatar(item.username)} className="mr-3" />
        <Text>{item.username}</Text>
      </div>
      <div className="flex gap-1 flex-col">
        <Text weight="2">Points: {item.scores}</Text>
        <Text weight="2">Tickets: {item.tickets}</Text>
      </div>
    </div>
  );
});

Friend.displayName = "Friend";
