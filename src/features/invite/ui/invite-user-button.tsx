import { TELEGRAM_BOT_LINK } from "@/shared/consts";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils";
import { initUtils } from "@telegram-apps/sdk-react";
import React, { useCallback } from "react";

type InviteUserButtonProps = {
  className?: string;
  userId?: number;
};

export const InviteUserButton = React.memo((props: InviteUserButtonProps) => {
  const { className, userId } = props;

  const utils = initUtils();

  const handlerInviteClick = useCallback(() => {
    if (userId !== undefined) {
      utils.shareURL(`${TELEGRAM_BOT_LINK}?startapp=${userId}`);
    } else {
      utils.shareURL(TELEGRAM_BOT_LINK);
    }
  }, []);

  return (
    <Button
      variant={"default"}
      onClick={handlerInviteClick}
      className={cn("", className)}
    >
      Share invite link
    </Button>
  );
});

InviteUserButton.displayName = "InviteUserButton";
