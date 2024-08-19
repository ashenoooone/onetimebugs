import { cn } from "@/shared/utils";
import React from "react";
import { TaskType } from "../model/types";
import { Task } from "./task";
import { Separator } from "@/shared/ui/separator";

type TasksProps = {
  className?: string;
  tasks?: TaskType[];
};

export const Tasks = React.memo((props: TasksProps) => {
  const { className, tasks } = props;
  return (
    <div className={cn("max-w-content w-full", className)}>
      {tasks?.map((t, index) => {
        const content = (
          <>
            <Separator />
            <Task task={t} key={t.id} />
          </>
        );

        return content;
      })}
    </div>
  );
});

Tasks.displayName = "Tasks";
