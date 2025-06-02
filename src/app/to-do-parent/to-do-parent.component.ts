import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from '../to-do-list/to-do-list.component';
import { TodoService } from '../to-do-service/to-do-service.component';


@Component({
  selector: 'app-todo-parent',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoComponent],
  templateUrl: './to-do-parent.component.html',
  styleUrls: ['./to-do-parent.component.scss']
})
export class TodoParentComponent implements OnInit {
  tasks: { text: string }[] = [];
  newTask = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    // Subscribe to the shared tasks from the service
    this.todoService.tasks$.subscribe((tasks) => (this.tasks = tasks));
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.todoService.addTask({ text: this.newTask.trim() });
      this.newTask = '';
    }
  }

  handleDelete(index: number) {
    this.todoService.deleteTask(index);
  }
  }


