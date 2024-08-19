import { cn } from "@/shared/utils";
import React, { useCallback, useMemo } from "react";
import { TaskType } from "../model/types";
import { Typography } from "@/shared/ui/typography";
import { CircleCheck } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { initUtils } from "@telegram-apps/sdk-react";
import { usePatchTask } from "../model/hooks";

type TaskProps = {
  className?: string;
  task: TaskType;
};

export const Task = React.memo((props: TaskProps) => {
  const { className, task } = props;
  const patchTask = usePatchTask({
    taskId: task.id,
  }).mutateAsync;

  // todo возможно следует разбить на несколько компонентов
  const utils = initUtils();

  const handleOpenLink = useCallback(
    (link: string) => () => {
      if (link.startsWith("https://t.me")) {
        utils.openTelegramLink(link);
      } else {
        utils.openLink(link);
      }
      setTimeout(async () => {
        await patchTask();
      }, 3000);
    },
    []
  );

  const action = useMemo(() => {
    if (task.type === "subscribe") {
      return <Button onClick={handleOpenLink(task.link)}>Subscribe</Button>;
    }
  }, []);

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
