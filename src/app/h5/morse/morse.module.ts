import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MorseRoutingModule } from './morse-routing.module';
import { DetailComponent } from './detail/detail.component';

import { SharedModule } from '@e_zorro';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    MorseRoutingModule,
    SharedModule,
    FormsModule,
    ClipboardModule,
  ]
})
export class MorseModule { }
