import { Component, inject } from "@angular/core";
import { TaskService } from "../../services/task.service";

@Component({
  selector: "app-filter-bar",
  imports: [],
  templateUrl: "./filter-bar.html",
  styleUrl: "./filter-bar.css",
})
export class FilterBar {
  private taskService: TaskService = inject(TaskService);
  filter = this.taskService.filter;

  set(filter: "all" | "done" | "undone") {
    this.taskService.setFilter(filter);
  }
}
