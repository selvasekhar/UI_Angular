import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './commonView/login/login.component';
// import { NgModule } from '@angular/core'; 

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'view', loadChildren: () => import(`./View/view.module`).then(m => m.ViewModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
