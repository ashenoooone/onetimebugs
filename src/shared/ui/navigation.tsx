import { routes } from "@/navigation/routes.tsx";
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "./Link/Link.tsx";
import { Typography } from "./typography.tsx";
import { cn } from "../utils/cn.ts";

export const Navigation = React.memo(() => {
  const location = useLocation();

  const currentPathname = location.pathname;

  return (
    <div className="px-2 py-3 fixed w-full left-0 right-0 bottom-0 grid grid-cols-5 max-w-mx-container mx-auto h-navbar bg-bg-primary">
      {routes.map((r) => {
        return (
          <Link
            replace
            active={currentPathname === r.path}
            key={r.path}
            to={r.path}
            className={cn(
              "flex mx-auto flex-col gap-1 items-center w-max",
              r.styles
            )}
          >
            {r.icon}
            <Typography variant={"body-1"}>{r.title}</Typography>
          </Link>
        );
      })}
    </div>
  );
});

Navigation.displayName = "navigation";
