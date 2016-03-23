// imports angular2 Components and model
import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  // plugs form for creating tasks into html
  <div class="task-form">
    <h3>Create Task:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
  //  regular old event emitter that runs the addTask method with a BUTTON
    <button (click)="addTask(newDescription)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement){
    // when user submits new task, the value is emitted
    this.onSubmitNewTask.emit(userDescription.value);
    // clearing the field
    userDescription.value = "";
  }
}
