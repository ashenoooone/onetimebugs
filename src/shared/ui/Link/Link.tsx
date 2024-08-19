import { useUtils } from "@telegram-apps/sdk-react";
import { type FC, type MouseEventHandler, useCallback } from "react";
import { Link as RouterLink, type LinkProps } from "react-router-dom";

import "./Link.css";
import { cn } from "@/shared/utils/cn.ts";

export const Link: FC<
  LinkProps & {
    active?: boolean;
  }
> = ({ className, onClick: propsOnClick, active, to, ...rest }) => {
  const utils = useUtils();

  const onClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => {
      propsOnClick?.(e);

      // Compute if target path is external. In this case we would like to open link using
      // TMA method.
      let path: string;
      if (typeof to === "string") {
        path = to;
      } else {
        const { search = "", pathname = "", hash = "" } = to;
        path = `${pathname}?${search}#${hash}`;
      }

      const targetUrl = new URL(path, window.location.toString());
      const currentUrl = new URL(window.location.toString());
      const isExternal =
        targetUrl.protocol !== currentUrl.protocol ||
        targetUrl.host !== currentUrl.host;

      if (isExternal) {
        e.preventDefault();
        utils.openLink(targetUrl.toString());
      }
    },
    [to, propsOnClick, utils]
  );

  return (
    <RouterLink
      {...rest}
      to={to}
      replace
      onClick={onClick}
      className={cn("link", className, {
        [`text-special-yellow`]: active,
      })}
    />
  );
};
