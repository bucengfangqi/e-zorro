import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpringRoutingModule } from './spring-routing.module';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    SpringRoutingModule,
    FormsModule
  ]
})
export class SpringModule { }
