//import angular2 Component and model
import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe ({
  name: "done",
  // pure needs to be false or it can't change data or inputs
  pure: false
})
// tells angular this is for a pipe
export class DonePipe implements PipeTransform {
  // parameters are array of objects(tasks), the argument which in this case is default 'not done'
  transform(input: Task[], args){
    console.log('selected task: ', args[0]);
    var desiredDoneState = args[0];
    if(desiredDoneState === "done"){
      return input.filter((task) => {
                  return task.done; // return false
      });
    } else if (desiredDoneState === "notDone") {
      return input.filter((task) => {
                return !task.done; // return true
      });
    } else {
      return input;
    }
  }
}
