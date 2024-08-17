import { cn } from "@/shared/utils";
import React from "react";
import Duck from "@/shared/assets/duck_vietnam.webp";

type LoaderProps = {
  className?: string;
  imageStyles?: string;
  centered?: boolean;
};

export const Loader = React.memo((props: LoaderProps) => {
  const { className, imageStyles, centered } = props;
  return (
    <div
      className={cn(className, {
        "w-full h-full translate-y-full top-1/2 flex items-center justify-center":
          centered,
      })}
    >
      <img src={Duck} alt="duck" className={cn(imageStyles)} />
    </div>
  );
});

Loader.displayName = "Loader";
