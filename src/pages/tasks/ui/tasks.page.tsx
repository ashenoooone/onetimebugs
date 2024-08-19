import { Page } from "@/shared/ui/page";
import { cn } from "@/shared/utils";
import React from "react";

type TasksPageProps = {
  className?: string;
};

export const TasksPage = React.memo((props: TasksPageProps) => {
  const { className } = props;
  return <Page className={cn("", className)}></Page>;
});

TasksPage.displayName = "TasksPage";
