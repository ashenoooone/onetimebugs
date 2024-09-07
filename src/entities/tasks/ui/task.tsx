import { cn } from "@/shared/utils";
import React, { useCallback, useMemo, useState } from "react";
import { isTaskSubscribe, TaskType } from "../model/types";
import { Typography } from "@/shared/ui/typography";
import { CircleCheck } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { initUtils } from "@telegram-apps/sdk-react";
import { usePostTask } from "../model/hooks";
import { Spinner } from "@/shared/ui/spinner";

type TaskProps = {
  className?: string;
  task: TaskType;
};

export const Task = React.memo((props: TaskProps) => {
  const { className, task } = props;

  const [taskIsLoading, setTaskIsLoading] = useState(false);

  const postTask = usePostTask({
    taskId: task.id,
  }).mutateAsync;

  // todo возможно следует разбить на несколько компонентов
  const utils = initUtils();

  const handleOpenLink = useCallback(
    (link: string) => () => {
      setTaskIsLoading(true);
      if (link.startsWith("https://t.me")) {
        utils.openTelegramLink(link);
      } else {
        utils.openLink(link);
      }
      setTimeout(async () => {
        await postTask().finally(() => {
          setTaskIsLoading(false);
        });
      }, 3000);
    },
    []
  );

  const action = useMemo(() => {
    if (task.type === "subscribe") {
      return (
        <Button
          className={cn({
            "bg-special-green relative text-text-primary after:bg-white/40 after:content-[' '] after:absolute after:w-1/2 after:h-1/2 after:rounded-xl after:animate-ping overflow-hidden":
              taskIsLoading,
          })}
          onClick={handleOpenLink(task.link)}
        >
          {taskIsLoading ? <Spinner /> : "Subscribe"}
        </Button>
      );
    }
  }, [taskIsLoading]);

  return (
    <div
      className={cn("p-4 mb-4 flex justify-between items-center", className)}
    >
      <div>
        <Typography variant={"h6"} className="font-medium">
          {task.title}
        </Typography>
        <Typography variant={"body-1"}>
          Reward: {task.reward} Ducks{" "}
          {task.maxCount > 1 && `(${task.count}/${task.maxCount})`}
        </Typography>
      </div>
      {task.isClaimed ? (
        <CircleCheck className="text-text-secondary" />
      ) : (
        action
      )}
    </div>
  );
});

Task.displayName = "Task";
