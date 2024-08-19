import { $api } from "@/shared/api";
import {PostTaskTypeParams, TaskType} from "./types";

export class TasksApi {
  static async getTasks() {
    return $api.get<TaskType[]>("tasks");
  }

  static async postTask(params: PostTaskTypeParams) {
    return $api.post(`tasks?taskId=${params.taskId}`);
  }
}
