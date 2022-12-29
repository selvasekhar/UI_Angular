import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view.component';

const routes: Routes = [
  {
    path: '',     
    component: ViewComponent,
    children: [
      { path: '', redirectTo: '/view/admin', pathMatch: 'full' },
      { path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
