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
          <Typography className="font-bold" variant={"h4"}>
            {formatNumber(user.balance)}
          </Typography>
        )}
      </Page>
    </WithUserInit>
  );
};
