import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { title_h5 } from '@_shared/title_h5'
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
    this.titleService.setTitle(title_h5[2].title);

  }
}
