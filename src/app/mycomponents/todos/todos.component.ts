import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
title="Zain"

todos:Todo[];
// Used to add the line to the todo array DOM 
inputTodo:string="";


  constructor() {
this.todos=[]
// Taking about upper line
// This is must because of new feature of TypeScript 2.7 called "STRICT PROPERTY INITIALIZATION"

}

  ngOnInit(): void {
this.todos=[
{content:"First Todo",completed:false},
{content:"Second Todo",completed:true},
{content:"Third Todo",completed:false},

]
  }
toggleDone(id: number){
  this.todos.map((v,i)=>{
    if(i==id)
    v.completed =!v.completed;  
    
    return v;
  })
}

deleteTodo(id:number){
  this.todos=this.todos.filter((v,i)=>i!==id);
}

addTodo(){
this.todos.push({content:this.inputTodo ,completed:false});
this.inputTodo="";
}


}
