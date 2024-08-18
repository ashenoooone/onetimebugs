import { cn } from "@/shared/utils";
import React from "react";
import Duck from "@/shared/assets/duck_loading.png";

type LoaderProps = {
  className?: string;
  imageStyles?: string;
  centered?: boolean;
  size?: number;
  fullScreen?: boolean;
};

export const Loader = React.memo((props: LoaderProps) => {
  const { className, size = 100, imageStyles, fullScreen, centered } = props;
  return (
    // todo анимация для появления и скрытия при моде фулскрин
    <div
      className={cn(className, {
        "fixed inset-0 flex items-center justify-center": centered,
        "fixed inset-0 flex items-center justify-center bg-bg-primary z-50":
          fullScreen,
      })}
    >
      <img
        style={{ width: size, height: size }}
        src={Duck}
        alt="duck"
        className={cn(imageStyles, "animate-bounce duration-1000")}
      />
    </div>
  );
});

Loader.displayName = "Loader";
