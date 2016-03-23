// import angular2 , child Components, model and pipe!
import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent} from './new-task.component';
import {DonePipe} from './done.pipe';

//
@Component({
  selector: 'task-list',
  // gets data from taskList
  inputs: ['taskList'],
  // allows us to select a task / aka onTaskSelect
  outputs: ['onTaskSelect'],
  // ??
  pipes: [DonePipe],
  // links children Components and shows they exist to this parent file
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  template: `
    <!-- this is how we interact with the pipe / get value out of menu when user changes it -->
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="done">Show Done</option>
      <option value="notDone" selected="selected">Show Not Done</option>
    </select>
    <!-- looping through our list of tasks (through our done/not done pipe) -->
    <task-display *ngFor="#currentTask of taskList | done:filterDone"
    <!-- event emitter when we click task it runs taskClicked -->
    (click)="taskClicked(currentTask)"
    <!-- applies selectedTask styling if clicked -->
    [class.selected]="currentTask === selectedTask"
    <!-- current selected task is here! -->
    [task]="currentTask">
    </task-display>
    <!-- shows empty form if user clicks on task (adds html form when true) -->
    <edit-task-details *ngIf="selectedTask" [task]="selectedTask">
    </edit-task-details>
    <!-- custom event emitter that creates a new task once user submits text -->
    <new-task (onSubmitNewTask)="createTask($event)"></new-task>
  `
})
export class TaskListComponent {
  // shows taskList expects an array of task objects
  public taskList: Task[];
  // custom event emitter that returns, once clicked, a Task that was clicked on
  public onTaskSelect: EventEmitter<Task>;
  // this is the task that's clicked on
  public selectedTask: Task;
  // default state of our tasks (not completed)
  public filterDone: string = "notDone";
  constructor() {
    // custom event emitter that returns, once clicked, a Task that was clicked on
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    // take in a selected task and changes to "clicked"
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  createTask(description: string): void{
    // add newly created task to the array
    this.taskList.push(
      new Task(description, this.taskList.length)
    );
  }
  onChange(filterOption){
    // links our drop-down to the pipe so we can use the change custom event emitter
    this.filterDone = filterOption;
  }
}
