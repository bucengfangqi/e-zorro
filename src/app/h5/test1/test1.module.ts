import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test1RoutingModule } from './test1-routing.module';
import { DetailComponent } from './detail/detail.component';

import { SharedModule } from '@e_zorro';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ DetailComponent],
  imports: [
    CommonModule,
    Test1RoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class Test1Module { }
