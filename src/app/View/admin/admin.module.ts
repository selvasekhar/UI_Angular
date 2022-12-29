import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoleSearchComponent } from './role-search/role-search.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [AdminMenuComponent, RoleSearchComponent, RoleDetailComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    MatInputModule,
    MatFormFieldModule 


  ],
  exports:[
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class AdminModule { }
