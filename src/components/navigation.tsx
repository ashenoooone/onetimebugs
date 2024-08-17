import { routes } from "@/navigation/routes";
import React, { useCallback } from "react";
import { FixedLayout, Tabbar, Text } from "@telegram-apps/telegram-ui";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "./Link/Link";

export const Navigation = React.memo(() => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPathname = location.pathname;

  const onTabbarClick = useCallback(
    (path: string) => () => {
      navigate(path);
    },
    []
  );

  return (
    <FixedLayout
      vertical="bottom"
      className="px-5 py-3 bg-[var(--tg-theme-bg-color)]"
    >
      <div className="flex justify-between">
        {routes.map((r) => {
          return (
            <Link
              key={r.path}
              to={r.path}
              className="flex flex-col gap-1 items-center"
            >
              {r.icon}
              <Text weight="3">{r.title}</Text>
            </Link>
          );
        })}
      </div>
    </FixedLayout>
  );
});

Navigation.displayName = "navigation";
