import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './h5/page/page.component';
const routes: Routes = [
  {
    path: 'morse',
    loadChildren: './h5/morse/morse.module#MorseModule',
  },
  {
    path: 'test1',
    loadChildren: './h5/test1/test1.module#Test1Module',
  },
  {
    path: 'test2',
    loadChildren: './h5/test2/test2.module#Test2Module',
  },
  {
    path: 'navbar',
    loadChildren: './h5/navbar/navbar.module#NavbarModule',
  },

  { path: '', redirectTo: '/page', pathMatch: 'full' },
  { path: '**', component: PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
