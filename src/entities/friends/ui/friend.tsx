import { cn } from "@/shared/utils";
import React from "react";
import { FriendType } from "../model/types";
import { getUserAvatar } from "@/entities/user";
import { Avatar, Text } from "@telegram-apps/telegram-ui";
import { Typography } from "@/shared/ui/typography";

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
        <Typography variant={"h5"}>{item.username}</Typography>
      </div>
      <div className="flex gap-1 flex-col">
        <Typography variant={"h5"}>Points: {item.scores}</Typography>
        <Typography variant={"h5"}>Tickets: {item.tickets}</Typography>
      </div>
    </div>
  );
});

Friend.displayName = "Friend";
