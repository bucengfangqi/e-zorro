import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { trigger, transition, useAnimation,animate } from '@angular/animations';
import { slideInLeft,slideOutRight } from 'ng-animate';
import { title_h5 } from '@_shared/title_h5'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [
    trigger('openClose', [
      transition('*=>open', useAnimation(slideInLeft, {
      params: { timing: 0.3},
    }))
    
    ,transition('open=>*', useAnimation(slideOutRight, {
      params: { timing: 0.3}
    }))
  ])
  ],
})
export class DetailComponent implements OnInit {
  word: string = "";
  morse: string = "";
  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(title_h5[0].title);
  }
}
