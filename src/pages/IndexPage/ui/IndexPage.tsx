import type { FC } from 'react';

import { Page } from '@/shared/ui/page.tsx';
import { WithUserInit } from '@/entities/user';
import { userStore } from '@/entities/user/model/user.store';
import { Typography } from '@/shared/ui/typography';
import { formatNumber } from '@/shared/utils/format-number';
import { TonConnectButton } from '@tonconnect/ui-react';
import { Bug } from '@/shared/icons/bug';
import { Button } from '@/shared/ui/button';
import { Label } from '@/shared/icons/label';

export const IndexPage: FC = () => {
  const user = userStore.use.me();

  return (
    <WithUserInit>
      <Page className="items-center justify-center">
        <TonConnectButton className="ton-connect-page__button-connected fixed top-10" />
        {user && (
          <div className="z-10">
            <div className="flex flex-col items-center">
              <Typography
                className="font-bold shadow-text-custom-green"
                variant={'h3'}
              >
                {formatNumber(user.balance)}
              </Typography>
              <div className="mt-7 text-center">
                <Typography variant={'h5'}>BUGS</Typography>
                <Typography className="text-d-gray" variant={'subtitle-2'}>
                  destroyed for all time
                </Typography>
              </div>
            </div>
            {/* TODO fix */}
            <div className="absolute bottom-[calc(80px+24px)] flex flex-col w-full left-0 gap-6 px-6 items-center">
              <div className="flex items-center gap-2">
                <Label className="text-d-green" />
                <Typography variant={'subtitle-1'}>
                  {user.tickets} TICKET
                </Typography>
              </div>
              <Button
                disabled={true}
                variant={'green'}
                className="rounded-none w-full flex flex-col"
              >
                <Typography variant={'h6'}>START Game</Typography>
                <Typography
                  variant={'caption'}
                  className="opacity-70 inline-flex gap-1"
                >
                  <Label /> -1 ticket
                </Typography>
              </Button>
            </div>
          </div>
        )}
        <Bug className="absolute z-0" />
      </Page>
    </WithUserInit>
  );
};
