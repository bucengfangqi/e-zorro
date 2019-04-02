import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrizeRoutingModule } from './prize-routing.module';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    PrizeRoutingModule,
    FormsModule
  ]
})
export class PrizeModule { }
