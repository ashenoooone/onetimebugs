import { useMutation, useQuery, useQueryClient } from "react-query";
import { TasksApi } from "./tasks.api";
import {PostTaskTypeParams} from "@/entities/tasks";

const TASKS_KEY = "TASKS";

export const useGetTasks = () =>
  useQuery({
    queryFn: () => TasksApi.getTasks(),
    queryKey: [TASKS_KEY],
    select: (data) => data.data,
  });

export const usePostTask = (params: PostTaskTypeParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => TasksApi.postTask(params),
    mutationKey: [TASKS_KEY],
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [TASKS_KEY] });
    },
  });
};
