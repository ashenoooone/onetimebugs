import { Section, Cell } from "@telegram-apps/telegram-ui";
import type { FC } from "react";

import { Link } from "@/shared/components/Link/Link.tsx";
import { Page } from "@/shared/components/page";
import {
  initInitData,
  retrieveLaunchParams,
  useInitData,
  useInitDataRaw,
} from "@telegram-apps/sdk-react";

export const IndexPage: FC = () => {
  const { initDataRaw, initData } = retrieveLaunchParams();

  console.log("@", JSON.stringify(initData));
  console.log("!", JSON.stringify(initDataRaw));

  return (
    <Page>
      <Section
        className="w-full"
        header="Features"
        footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
      >
        <Link to="/ton-connect">
          <Cell subtitle="Connect your TON wallet">TON 123321</Cell>
        </Link>
      </Section>
    </Page>
  );
};
