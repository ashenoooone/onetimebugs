import { cn } from "@/shared/utils";
import React from "react";
import { Loader2 as Spinn } from "lucide-react";

type SpinnerProps = {
  className?: string;
};

export const Spinner = React.memo((props: SpinnerProps) => {
  const { className } = props;
  return <Spinn className={cn("animate-spin", className)} />;
});

Spinner.displayName = "Spinner";
