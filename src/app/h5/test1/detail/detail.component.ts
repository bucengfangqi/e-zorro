import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { title_h5 } from '@_shared/title_h5'
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
    this.titleService.setTitle(title_h5[1].title);

  }
}
