import { Component, OnInit } from '@angular/core';
import { title_h5 } from '../../_shared/title_h5';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  title_h5=title_h5;
  constructor() { }

  ngOnInit() {
  }

}
