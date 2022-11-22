import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from 'src/app/model/Todo';

@Component({
  selector: 'app-edit-todos',
  templateUrl: './edit-todos.component.html',
  styleUrls: ['./edit-todos.component.css']
})
export class EditTodosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  etitle : string= this.data.title;
  edesc : string= this.data.desc;

  ngOnInit(): void {
  }

  update(data:any){
    data.title = this.etitle;
    data.desc = this.edesc;
  }

}
