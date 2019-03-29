import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test2Component } from './test2/test2.component';
const routes: Routes = [
  { path: '', redirectTo: '#', pathMatch: 'full' },
  { path: '**', component: Test2Component, }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test2RoutingModule { }
