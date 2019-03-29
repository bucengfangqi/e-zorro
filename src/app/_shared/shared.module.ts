import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XmorsePipe } from './pipe/xmorse.pipe';
import { DmorsePipe } from './pipe/dmorse.pipe';

@NgModule({
  declarations: [XmorsePipe, DmorsePipe],
  imports: [
    CommonModule
  ],
  exports:[
    XmorsePipe,
    DmorsePipe,
  ]
})
export class SharedModule { }
