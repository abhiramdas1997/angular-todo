import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];
  constructor() {
    this.todos = [
      {
        id:"111",
        title:"task1",
        isCompleted:true,
        date: new Date(),
      },
      {
        id:"222",
        title:"task2",
        isCompleted:true,
        date: new Date(),
      },
      {
        id:"333",
        title:"task3",
        isCompleted:false,
        date: new Date(),
      }
    ];
   }

  //  get todo
  getTodos(){
    return of(this.todos);
  }

  // insert todo
  addTodo(todo:Todo){
    this.todos.push(todo);
  }

  // update todo
  changeStatus(todo:Todo){
    this.todos.map(
      singleTodo => {
        if(singleTodo.id == todo.id){
          todo.isCompleted = !todo.isCompleted;
        }
      }
    );
  }

  // delete todo
  deleteTodo(todo:Todo){
    const indexofTodo = this.todos.findIndex(
      (indexofTodo) => indexofTodo.id = todo.id
    )
    this.todos.splice(indexofTodo,1);
  }
}
