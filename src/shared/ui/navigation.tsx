import { routes } from "@/navigation/routes.tsx";
import React from "react";
import { FixedLayout, Text } from "@telegram-apps/telegram-ui";
import { useLocation } from "react-router-dom";
import { Link } from "./Link/Link.tsx";
import { Typography } from "./typography.tsx";

export const Navigation = React.memo(() => {
  const location = useLocation();

  const currentPathname = location.pathname;

  return (
    <FixedLayout
      vertical="bottom"
      className="p-5 flex justify-between max-w-mx-container items-center mx-auto h-navbar bg-bg-primary"
    >
      {routes.map((r) => {
        return (
          <Link
            active={currentPathname === r.path}
            key={r.path}
            to={r.path}
            className="flex flex-col gap-1 items-center w-max"
          >
            {r.icon}
            <Typography>{r.title}</Typography>
          </Link>
        );
      })}
    </FixedLayout>
  );
});

Navigation.displayName = "navigation";
