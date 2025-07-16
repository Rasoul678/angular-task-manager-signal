import { Component } from "@angular/core";
import { TaskService } from "../../services/task.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-task-list",
  imports: [CommonModule],
  templateUrl: "./task-list.html",
  styleUrl: "./task-list.css",
})
export class TaskList {
  constructor(public tasks: TaskService) {}
}
