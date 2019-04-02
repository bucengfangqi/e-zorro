import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HzMdRoutingModule } from './hz-md-routing.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    HzMdRoutingModule
  ]
})
export class HzMdModule { }
