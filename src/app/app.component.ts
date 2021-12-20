import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {tasks} from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(_title: any) {
    throw new Error('Method not implemented.');
  }

  todos:tasks[];
  

  taskForm: FormGroup;

  constructor(){}
  ngOnInit(){
    // console.log("hiiii"+this.todos)
    this.taskForm = new FormGroup({
      task: new FormControl(),
    })
    this.todos=[];
  }

  onSubmit(){
    let valname = JSON.stringify(this.taskForm.value.task);

    let myObject = {
      name:valname,
      isCompleted:false
    }
    this.todos.push(myObject);
    console.log(this.todos);

    
  }
  done(id:number){
    this.todos[id].isCompleted =!this.todos[id].isCompleted;
  }
  remove(id:number){
    this.todos = this.todos.filter((v,i) =>i !==id);
  }
}
