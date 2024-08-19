import { useMutation, useQuery, useQueryClient } from "react-query";
import { TasksApi } from "./tasks.api";

const TASKS_KEY = "TASKS";

export const useGetTasks = () =>
  useQuery({
    queryFn: () => TasksApi.getTasks(),
    queryKey: [TASKS_KEY],
    select: (data) => data.data,
  });

export const usePatchTask = (params: { taskId: number }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => TasksApi.patchTask(params),
    mutationKey: [TASKS_KEY],
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [TASKS_KEY] });
    },
  });
};
