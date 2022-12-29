import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { RoleSearchComponent } from './role-search/role-search.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';

const routes: Routes = [

      { path: '', component: AdminMenuComponent },
      { path: 'RoleSearch', component: RoleSearchComponent },
      { path: 'RoleDetail', component: RoleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
