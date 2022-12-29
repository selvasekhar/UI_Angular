import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ViewModule  } from './View/view.module';
import { AlertComponent } from './commonView/alert/alert.component';
import { PreloadComponent } from './commonView/preload/preload.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './commonView/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MdButtonModule, MdMenuModule, MdSidenavModule } from '@angular/material';

import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    PreloadComponent,
  ],
  imports: [
    BrowserModule,    
    NgbModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
   BrowserAnimationsModule,
   MatSelectModule,
  //  MdButtonModule,
  //  MdMenuModule,
   FormsModule,
  //  MdSidenavModule
  MatSliderModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule
    


],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
