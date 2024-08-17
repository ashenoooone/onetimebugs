import { Section, Cell, List } from "@telegram-apps/telegram-ui";
import type { FC } from "react";

import { Link } from "@/components/Link/Link.tsx";

export const IndexPage: FC = () => {
  return (
    <List className="flex flex-col min-h-screen max-w-[900px] mx-auto items-center">
      <Section
        className="flex-grow"
        header="Features"
        footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
      >
        <Link to="/ton-connect">
          <Cell subtitle="Connect your TON wallet">TON Connect</Cell>
        </Link>
      </Section>
    </List>
  );
};
