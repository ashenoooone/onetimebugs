import { Tasks, useGetTasks } from "@/entities/tasks";
import { Loader } from "@/shared/ui/loader";
import { Page } from "@/shared/ui/page";
import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/utils";
import React from "react";
import Duck from "@/shared/assets/duck_money.png";

type TasksPageProps = {
  className?: string;
};

export const TasksPage = React.memo((props: TasksPageProps) => {
  const { className } = props;
  const { data, isLoading, isError } = useGetTasks();

  if (isLoading) {
    return <Loader centered />;
  }

  if (isError) {
    throw new Error("Failed to fetch tasks");
  }

  return (
    <Page className={cn("", className)}>
      <Typography variant={"h4"} className="font-bold">
        Tasks
      </Typography>
      <Typography className="text-text-secondary" variant={"h5"}>
        Get rewards for tasks
      </Typography>
      <img src={Duck} className="w-32 my-4" alt="Duck money" />
      <Tasks tasks={data} />
    </Page>
  );
});

TasksPage.displayName = "TasksPage";
