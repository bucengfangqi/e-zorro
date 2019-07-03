import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-scss-test',
  templateUrl: './scss-test.component.html',
  styleUrls: ['./scss-test.component.scss']
})
export class ScssTestComponent implements OnInit {
  ss: number;
  mm: number;
  hh: number;
  constructor() {
    this.ss = this.mm = this.hh = 0;
  }

  ngOnInit() {
    timer(0, 1000).subscribe(() => {
      this.getTime();
    });
  }

  getTime() {
    const dateData = new Date();

    this.ss = dateData.getSeconds();
    this.mm = dateData.getMinutes() + (dateData.getSeconds() ? (Math.round(this.ss / 60 * 100) / 100) : 0);
    this.hh = dateData.getHours() + (dateData.getMinutes() ? (Math.round(this.mm / 60 * 100) / 100) : 0);


  }
}
