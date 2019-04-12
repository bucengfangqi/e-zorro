import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { title_h5 } from '@_shared/title_h5'
import { interval } from 'rxjs';
import { take, } from 'rxjs/operators';
declare var countdown:any;
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  prizeNum;

  prizeList = ['p-mate.png', 'p-2-￥500.png', 'p-10000-1.png', 'p-8-￥500.png', '开始', 'p-4-￥500.png', 'p-gold.png', 'p-6-￥500.png', 'p-10000-2.png'];
  index = 1;//默认的奖品下标
  run_sequence = ['p-mate.png', 'p-2-￥500.png', 'p-10000-1.png', 'p-4-￥500.png','p-10000-2.png', 'p-6-￥500.png', 'p-gold.png', 'p-8-￥500.png'];
  
  runAble = true;//按钮是否可点击
  timing = 50;//奖品跳转间隔
  timer;//定时器
  timerSecond;//定时器

  isEnd:boolean=false;
  run(content, num?) {
    if (content === '开始' && this.runAble) {
      this.runAble = false;

      this.timer = interval(this.timing).pipe(take(num || ((this.prizeNum ? this.prizeNum : Math.round(Math.random()*7+1)) + 38 - (this.index + 1))));
      this.timer.subscribe({
        next: value => {
          //如果数据下标等于run_sequence的长度
          this.index === 7 ? this.index = 0 : this.index += 1;
        },
        error: error => {
          console.error(error)
        },
        complete: () => {
          this.runAble = true;
          //缓动效果
          if (this.timing <= (8 * 50 + 100)) {
            this.timing += 50;
            this.timer = interval(this.timing).pipe(take(1));
            this.run('开始', 1)
          } else {
            this.timing = 50;
          }

        }
      })
    }

  }
  constructor(
    private titleService: Title
  ) { }

  endTime="2019-05-11 23:59:59";//Date.parse(new Date("2019-10-01 23:59:59"))时间戳
  since
  ngOnInit() {
    this.titleService.setTitle(title_h5[6].title);
    this.getEndTime();
    this.timerSecond=interval(250).subscribe({
      next: value => {
        this.getEndTime();
      },
    })
    
  }
  getEndTime(){
    if(this.getPureTime()>=this.getPureTime(this.endTime)){
      this.since=countdown(this.getPureTime(),this.getPureTime(), countdown.DEFAULTS);
      this.isEnd=true;
    }else{
      this.since=countdown(null,this.getPureTime(this.endTime), countdown.DEFAULTS);
      this.isEnd=false;
    }
    
  }
  getPureTime(time?){
    if(time){
      return  Date.parse(""+new Date(time));
    }else{
      return  Date.parse(""+new Date());
    }
  }
}
