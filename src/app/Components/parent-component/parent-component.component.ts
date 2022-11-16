import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  parentValue = '';
  childValue = '';

  getvalue(val: string){
    this.parentValue = val;
    console.log(this.parentValue)
  }

  addItem(newItem: string) {
    this.childValue = newItem;
  }

}
