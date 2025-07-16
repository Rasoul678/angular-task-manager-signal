import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TaskService } from "../../services/task.service";
import { Priority } from "../../models/task.model";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-task-form",
  imports: [CommonModule, FormsModule],
  templateUrl: "./task-form.html",
  styleUrl: "./task-form.css",
})
export class TaskFormComponent {
  title = "";
  priority: Priority = "medium";

  constructor(private tasks: TaskService) {}

  onSubmit(e: Event) {
    e.preventDefault();
    this.tasks.addTask(this.title, this.priority);
    this.title = "";
  }
}
