//defines the object our program is built around
export class Task {
  // whether the tick-box has been ticked or not, this is outside the Constructor because we declare a starting value for it
  public done: boolean = false;
  // properties every task will have and gives it a number id
  constructor(public description: string, public id: number) {
  }
}
