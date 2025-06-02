
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class TodoService {
  private tasksSubject = new BehaviorSubject<{ text: string }[]>([
    { text: 'Task 1' },
    { text: 'Task 2' }
  ]);

  tasks$ = this.tasksSubject.asObservable();

  addTask(task: { text: string }) {
    const tasks = this.tasksSubject.value;
    this.tasksSubject.next([...tasks, task]);
  }

  deleteTask(index: number) {
    const tasks = this.tasksSubject.value;
    tasks.splice(index, 1);
    this.tasksSubject.next([...tasks]);
  }
}
