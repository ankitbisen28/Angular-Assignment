import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from 'src/app/model/Todo';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css'],
})
export class AddTodosComponent implements OnInit {
  title: string = '';
  desc: string = '';
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  @Input() todo: any;

  constructor() {}

  ngOnInit(): void {}

  clear() {
    (this.title = ''), (this.desc = '');
  }
  onSubmit() {
    if (this.title === '' && this.desc === '') {
      alert('Fill input box ');
    } else {
      const todo = {
        sno: 8,
        title: this.title,
        desc: this.desc,
        active: true,
      };
      this.todoAdd.emit(todo);
      this.clear();
    }
  }
}
