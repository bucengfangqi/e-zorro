import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    FormsModule
  ]
})
export class NavbarModule { }
