import { Component } from "@angular/core";
import { TaskService } from "../../services/task.service";
import { CommonModule, TitleCasePipe } from "@angular/common";

@Component({
  selector: "app-task-list",
  imports: [CommonModule, TitleCasePipe],
  templateUrl: "./task-list.html",
  styleUrl: "./task-list.css",
})
export class TaskListComponent {
  constructor(public tasks: TaskService) {}
}
