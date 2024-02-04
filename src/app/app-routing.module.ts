import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TdFormComponent} from './td-form/td-form.component';
import {RFormComponent} from './r-form/r-form.component';


const routes: Routes = [
  {path: 'tdform', component: TdFormComponent},
  {path: 'rform', component: RFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
