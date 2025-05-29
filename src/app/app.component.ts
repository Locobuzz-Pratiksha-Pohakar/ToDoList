import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './to-do-list/to-do-list.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  template: `<app-todo></app-todo>`
})
export class AppComponent {}
