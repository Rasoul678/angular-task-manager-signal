import { Injectable, computed, effect, signal } from "@angular/core";
import { Task } from "../models/task.model";

type Filter = "all" | "done" | "undone";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private taskId = 1;
  private _tasks = signal<Task[]>([]);
  private _filter = signal<Filter>("all");

  readonly tasks = this._tasks.asReadonly();
  readonly filter = this._filter;

  readonly filteredTasks = computed(() => {
    const filter = this._filter();
    return this._tasks().filter((task) =>
      filter === "all" ? true : filter === "done" ? task.done : !task.done,
    );
  });

  readonly doneCount = computed(
    () => this._tasks().filter((t) => t.done).length,
  );

  constructor() {
    const saved = localStorage.getItem("tasks");
    if (saved) this._tasks.set(JSON.parse(saved));

    effect(() => {
      localStorage.setItem("tasks", JSON.stringify(this._tasks()));
    });
  }

  addTask(title: string, priority: Task["priority"]) {
    const newTask: Task = {
      id: this.taskId++,
      title,
      done: false,
      priority,
    };
    this._tasks.update((tasks) => [...tasks, newTask]);
  }

  toggleTask(id: number) {
    this._tasks.update((tasks) =>
      tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  }

  deleteTask(id: number) {
    this._tasks.update((tasks) => tasks.filter((t) => t.id !== id));
  }

  setFilter(filter: Filter) {
    this._filter.set(filter);
  }
}
