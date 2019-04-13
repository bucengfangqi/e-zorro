import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  imagesList=[
    "http://ppvtrh2z9.bkt.clouddn.com/1.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/2.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/3.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/4.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/5.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/6.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/7.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/8.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/9.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/10.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/11.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/12.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/13.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/14.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/15.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/16.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/17.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/18.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/19.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/20.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/21.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/22.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/23.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/24.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/25.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/26.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/27.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/28.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/29.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/30.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/31.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/32.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/33.jpeg",
    "http://ppvtrh2z9.bkt.clouddn.com/34.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/35.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/36.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/37.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/38.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/39.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/40.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/41.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/42.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/43.webp",
    "http://ppvtrh2z9.bkt.clouddn.com/44.webp",
    "http://ppvtrh2z9.bkt.clouddn.com/45.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/46.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/47.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/48.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/49.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/50.jpg",
    "http://ppvtrh2z9.bkt.clouddn.com/51.jpg",

  ]
  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle("图图图");
  }

}
