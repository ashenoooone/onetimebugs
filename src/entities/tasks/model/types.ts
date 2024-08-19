export type TaskTypeLiteralType = "subscribe";

export type TaskType = {
  id: number;
  type: TaskTypeLiteralType;
  title: string;
  reward: number;
  isClaimed: boolean;
  count: number;
  maxCount: number;
  link: string;
};

export const isTaskSubscribe = (task: TaskType) => {
  return task.type === "subscribe";
};
