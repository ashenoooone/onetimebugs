import type { FC } from 'react';

import { Page } from '@/shared/ui/page.tsx';
import { WithUserInit } from '@/entities/user';
import { userStore } from '@/entities/user/model/user.store';
import { Typography } from '@/shared/ui/typography';
import { formatNumber } from '@/shared/utils/format-number';
import { TonConnectButton } from '@tonconnect/ui-react';
import { Bug } from '@/shared/icons/bug';

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
                <Typography
                  className="text-text-secondary/60"
                  variant={'subtitle-2'}
                >
                  destroyed for all time
                </Typography>
              </div>
            </div>
          </div>
        )}
        <Bug className="absolute z-0" />
      </Page>
    </WithUserInit>
  );
};
