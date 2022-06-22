import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localitem: string|null;
  todos:todo[];

  constructor() { 

    this.localitem = localStorage.getItem("todos");

    if(this.localitem ==null){
      this.todos = []
    }
    else{
        this.todos = JSON.parse(this.localitem);
        console.log(this.todos);
    }
    
  }
 
  ngOnInit(): void {
  }

  deletetodo(todo:todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addtodo(todo:todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo:todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log(this.todos);
  }

  hello(){
    console.log("hello");
  }

}