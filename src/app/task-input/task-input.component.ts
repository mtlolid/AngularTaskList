import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {

  public task = '';
  public taskArr: Array<any> = [];
  public message !: string;

  addTask(): void {
    if (this.task != '') {
      let object = {
        taskName: this.task,
        taskStatus: false
      };
      this.taskArr.push(object);
      this.task = '';
    }
  };

  getArr(newArr: any): void{
    this.taskArr = newArr;
  };
}
