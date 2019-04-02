import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import GeoPattern from 'geopattern'
import { title_h5 } from '@_shared/title_h5'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  accordionExample=true;
  constructor(
    private titleService: Title
  ) { }
  pattern;
  initstr="随便写点啥......";
  ngOnInit() {
    this.titleService.setTitle(title_h5[3].title);
    this.getBg(this.initstr)
  }
  getBg(str){
    var pattern = GeoPattern.generate(str);
    this.pattern=pattern.toDataUrl();
  }
}
