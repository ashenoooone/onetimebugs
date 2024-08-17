import { routes } from "@/navigation/routes";
import React, { useCallback } from "react";
import { Tabbar, Text } from "@telegram-apps/telegram-ui";
import { Link } from "./Link/Link";
import { useLocation, useNavigate } from "react-router-dom";

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
    <Tabbar>
      {routes.map((route) => {
        return (
          <Tabbar.Item
            key={route.path}
            onClick={onTabbarClick(route.path)}
            selected={currentPathname === route.path}
            text={route.title}
          >
            {route.icon}
          </Tabbar.Item>
        );
      })}
    </Tabbar>
  );
});

Navigation.displayName = "navigation";
