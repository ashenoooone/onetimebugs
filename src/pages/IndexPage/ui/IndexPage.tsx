import type { FC } from "react";

import { Page } from "@/shared/ui/page.tsx";
import { WithUserInit } from "@/entities/user";
import logo from "@/shared/assets/duck_logo.png";
import { userStore } from "@/entities/user/model/user.store";
import { Typography } from "@/shared/ui/typography";
import { formatNumber } from "@/shared/utils/format-number";
import { TonConnectButton } from "@tonconnect/ui-react";

export const IndexPage: FC = () => {
  const user = userStore.use.me();

  return (
    <WithUserInit>
      <Page>
        <TonConnectButton className="ton-connect-page__button-connected" />
        <img src={logo} alt="logo" className="w-52" />
        {user && (
          <div>
            <div className="flex flex-col items-center">
              <Typography className="font-bold" variant={"h4"}>
                {formatNumber(user.balance)}
              </Typography>
              <Typography className="text-text-secondary" variant={"h6"}>
                $DUCKS
              </Typography>
            </div>
            <Typography className="mt-2" variant={"h6"}>
              Tickets: {user.tickets} 🎟
            </Typography>
          </div>
        )}
      </Page>
    </WithUserInit>
  );
};
