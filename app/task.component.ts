// imports angular2 Components and model
import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component ({
  selector: 'task-display',
  // data the actual Component is acting upon
  inputs: ['task'],
  template: `
  <div>
  <!-- if task.done = true, make it checked! and link it to the toggleDone() method-->
    <input *ngIf="task.done" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="!task.done" type="checkbox" (click)="toggleDone(true)"/>
    <!-- show task name -->
    <label>{{ task.description }}</label>
  </div>
  `
})
export class TaskComponent {
  // turns task into a property
  public task: Task;
  // changing done property (done or not done!)
  toggleDone(setState: boolean){
    this.task.done = setState;
  }
}
