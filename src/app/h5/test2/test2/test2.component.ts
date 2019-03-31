import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  range:number=49;
  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle("flexBox瀑布流");

  }
}
