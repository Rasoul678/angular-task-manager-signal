import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TaskFormComponent } from "./components/task-form/task-form.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, TaskFormComponent],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected title = "task-manager";
}
