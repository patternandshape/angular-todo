// imports angular2 Components, child Components and model
import {Component, EventEmitter} from 'angular2/core';
import {TaskListComponent} from './task-list.component';
import {Task} from './task.model';

@Component({
  // html tag / reference name
  selector: 'my-app',
  // links child Component to this root Component
  directives: [TaskListComponent],
  // html inputted into page all at once on load
  template: `
    <div class="container">
      <h1>To-Do List</h1>
      <task-list
      [taskList]="tasks"
      (onTaskSelect)="taskWasSelected($event)">
      </task-list>
    <div>
  `
})

// handles actions from the view
export class AppComponent {
  public tasks: Task[]; //Task[] (or Array<Task>) identifies tasks as an array of Task objects
  constructor() {
    // array of our objects: which are instances of our model aka "tasks"
    this.tasks = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Kung Fu.", 1),
      new Task("Rewatch all the Lord of the Rings movies.", 2),
      new Task("Do the laundry.", 3)
    ];
  }
  // to illustrate a child event fires off before parent event
  taskWasSelected(clickedTask: Task): void {
    console.log('parent', clickedTask);
  }
}
