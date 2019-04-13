import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureRoutingModule } from './picture-routing.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    PictureRoutingModule
  ]
})
export class PictureModule { }
