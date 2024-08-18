import { cn } from "@/shared/utils/cn.ts";
import React, { ReactNode } from "react";

type PageProps = {
  className?: string;
  children?: ReactNode;
};

export const Page = React.memo((props: PageProps) => {
  const { className, children } = props;
  return (
    <div
      className={cn(
        "flex flex-col py-7 px-4 max-w-mx-container mx-auto items-center w-full",
        className
      )}
    >
      {children}
    </div>
  );
});

Page.displayName = "Page";
