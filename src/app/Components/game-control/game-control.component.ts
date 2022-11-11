import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  constructor() {}

  num = 0;
  start:any;
  evenvalue = 0;
  oddvalue = 0;
  i = 0;

  increament = (num: number) => {
    this.num++;
    for (this.i = 0; this.i < this.num; this.i++) {
      if (this.i % 2 == 0) {
        this.evenvalue = this.i;
        console.log('even value', this.evenvalue);
      } else {
        this.oddvalue = this.i;
        console.log('odd value', this.oddvalue);
      }
    }
  };

  startInterval = () => {
    this.start = setInterval(this.increament, 1000);
  };

  stopInterval = () => {
    clearInterval(this.start);
  };

  ngOnInit() {}
}
