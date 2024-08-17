import { cn } from "@/shared/utils";
import React from "react";
import Duck from "@/shared/assets/duck_vietnam.webp";

type LoaderProps = {
  className?: string;
  imageStyles?: string;
};

export const Loader = React.memo((props: LoaderProps) => {
  const { className, imageStyles } = props;
  return (
    <div className={cn("", className)}>
      <img src={Duck} alt="duck" className={imageStyles} />
    </div>
  );
});

Loader.displayName = "Loader";
