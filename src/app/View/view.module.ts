import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { RouterModule } from '@angular/router';
// import {MatFormFieldModule, MatLabel } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    ViewRoutingModule,
    
  ],
})
export class ViewModule { }
