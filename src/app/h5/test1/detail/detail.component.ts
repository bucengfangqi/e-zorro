import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  range:number=49;
  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle("div-charts");

  }
}
