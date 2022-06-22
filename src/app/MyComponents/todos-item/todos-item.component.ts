import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {
// @Input() todo: todo;
 @Input() todo:todo;
 @Input() i:number;
 @Output() todoDelete: EventEmitter<todo> = new EventEmitter();
 @Output() todoCheckbox: EventEmitter<todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: todo){
    this.todoDelete.emit(todo);
  }
  
  onCheckboxClick(todo: todo){
    this.todoCheckbox.emit(todo);
  }
}