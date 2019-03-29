import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test1RoutingModule } from './test1-routing.module';
import { Test1Component } from './test1/test1.component';

import { SharedModule } from '@e_zorro';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [Test1Component],
  imports: [
    CommonModule,
    Test1RoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class Test1Module { }
