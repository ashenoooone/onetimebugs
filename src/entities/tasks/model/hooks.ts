import { useQuery } from "react-query";
import { TasksApi } from "./tasks.api";

const TASKS_KEY = "TASKS";

export const useGetTasks = () =>
  useQuery({
    queryFn: () => TasksApi.getTasks(),
    queryKey: [TASKS_KEY],
    select: (data) => data.data,
  });
