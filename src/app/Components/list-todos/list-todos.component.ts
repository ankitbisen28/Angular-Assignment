import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Todo } from '../../model/Todo';
import { EditTodosComponent } from '../edit-todos/edit-todos.component';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  @Input()
  todo: Todo = new Todo;
  @Input()
  i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  dialogRef: any ;

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggerd")
  }
  onCheckboxClick(todo: Todo){
    console.log(todo)
    this.todoCheckbox.emit(todo);
  }

  openDialog(todo : Todo){
    this.dialogRef = this.dialog.open(EditTodosComponent, {
      data : {title: this.todo.title, desc: this.todo.desc}
    });

    this.dialogRef.afterClosed().subscribe((result: any) => {
      this.todo.title = result.title;
      this.todo.desc = result.desc;
    })
  }

}
