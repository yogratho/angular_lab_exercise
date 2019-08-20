import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCComponent } from './form-c/form-c.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';


const routes: Routes = [
  {path:'',redirectTo:'formpage', pathMatch:'full'},
  {path:'formpage',component:FormCComponent},
  {path:'formvalidation',component:FormvalidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
