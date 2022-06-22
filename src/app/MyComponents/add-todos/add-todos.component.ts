import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {

  title:string;
  desc:string;
  active:boolean;

  @Output() todoAdd: EventEmitter<todo> = new EventEmitter();
  @Output() hello: EventEmitter<todo>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: this.active
    }

    this.todoAdd.emit(todo);
    this.hello.emit(todo);
  }



}
