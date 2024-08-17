import { routes } from "@/navigation/routes.tsx";
import React from "react";
import { FixedLayout, Text } from "@telegram-apps/telegram-ui";
import { useLocation } from "react-router-dom";
import { Link } from "./Link/Link.tsx";

export const Navigation = React.memo(() => {
  const location = useLocation();

  const currentPathname = location.pathname;

  return (
    <FixedLayout vertical="bottom" className="px-5 py-3 bg-bg-primary">
      <div className="flex justify-between max-w-mx-container mx-auto">
        {routes.map((r) => {
          return (
            <Link
              active={currentPathname === r.path}
              key={r.path}
              to={r.path}
              className="flex flex-col gap-1 items-center w-max"
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
