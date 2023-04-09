import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-input',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.scss']
})
export class ListInputComponent {

  @Input() arrTask!: Array<any>;
  @Output() newArr = new EventEmitter<any>();

  public editCheck!: boolean;
  public editIndex!: number;
  public editName!: string;

  delete(index: number): void {
    if (!this.editCheck) {
      this.arrTask.splice(index, 1);
      this.newArr.emit(this.arrTask);
    }
  }

  edit(index: number): void {
    this.editCheck = true;
    this.editIndex = index;
    this.editName = this.arrTask[this.editIndex].taskName;
  }

  editSave(): void {
    this.arrTask[this.editIndex].taskName = this.editName;
    this.editCheck = false;
    this.newArr.emit(this.arrTask);
  }
  
}
