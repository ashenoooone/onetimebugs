import { TELEGRAM_BOT_LINK } from '@/shared/consts';
import { Copy } from '@/shared/icons/copy';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';
import { ClipboardCheck } from 'lucide-react';
import React, { ReactNode, useCallback, useState } from 'react';

type CopyInviteLinkButtonProps = {
  className?: string;
  userId?: number;
};

export const CopyInviteLinkButton = React.memo(
  (props: CopyInviteLinkButtonProps) => {
    const { className, userId } = props;
    const [text, setText] = useState<ReactNode>('Copy invite link');

    const handleCopyInviteLinkClick = useCallback(() => {
      const link = userId
        ? `${TELEGRAM_BOT_LINK}?startapp=${userId}`
        : TELEGRAM_BOT_LINK;

      navigator.clipboard.writeText(link).then(() => {
        setText('Copied');
        setTimeout(() => setText('Copy invite link'), 2000); // Вернуть текст через 2 секунды
      });
    }, [userId]);

    return (
      <Button
        className={cn('flex gap-2 items-center', className)}
        variant={'outline_green'}
        onClick={handleCopyInviteLinkClick}
      >
        <Copy />
        {text}
      </Button>
    );
  },
);

CopyInviteLinkButton.displayName = 'CopyInviteLinkButton';
