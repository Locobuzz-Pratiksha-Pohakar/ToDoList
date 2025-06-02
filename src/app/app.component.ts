import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoParentComponent } from './to-do-parent/to-do-parent.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoParentComponent],
  template: `<app-todo-parent></app-todo-parent>`
})
export class AppComponent {}
