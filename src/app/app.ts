import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TaskFormComponent } from "./components/task-form/task-form.component";
import { TaskList } from "./components/task-list/task-list.component";
import { FilterBar } from "./components/filter-bar/filter-bar";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, TaskFormComponent, TaskList, FilterBar],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected title = "task-manager";
}
