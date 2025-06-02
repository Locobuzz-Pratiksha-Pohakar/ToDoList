import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./to-do-list.component.html',  
  styleUrls: ['./to-do-list.component.scss']
})
export class TodoComponent {
  @Input() tasks: { text: string }[] = [];
  @Output() deleteTask = new EventEmitter<number>();

  onDelete(index: number) {
    this.deleteTask.emit(index);
  }
}



