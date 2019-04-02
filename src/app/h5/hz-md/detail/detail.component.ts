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

  constructor(
    private titleService: Title
  ) { }
  pattern1;
  pattern2;
  pattern3;
  pattern4;
  ngOnInit() {
    this.titleService.setTitle(title_h5[5].title);
    this.pattern1 = GeoPattern.generate("6743").toDataUrl();
    this.pattern2 = GeoPattern.generate("0000212").toDataUrl();
    this.pattern3 = GeoPattern.generate("66").toDataUrl();
    this.pattern4 = GeoPattern.generate("66666555").toDataUrl();
  }


}
