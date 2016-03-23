// imports angular2 Components and model
import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
  <!-- input form into html when list item clicked -->
  <div class="task-form">
  <h3>Edit Description: </h3>
  <!-- 2-way binding allows user to update text of list-->
  <input [(ngModel)]="task.description" class="col-sm-8 input-lg task-form"/>
  </div>

  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
