import { $api } from "@/shared/api";
import { TaskType } from "./types";

export class TasksApi {
  static async getTasks() {
    return $api.get<TaskType[]>("tasks");
  }

  static async patchTask(params: { taskId: number }) {
    return $api.patch(`tasks?taskId=${params.taskId}`);
  }
}
