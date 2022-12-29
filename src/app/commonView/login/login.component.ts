import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms'
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  
  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  constructor(private router:Router) { }

  ngOnInit() {

  }
  firstdiv: boolean = true;
  seconddiv: boolean;
  resetPassword: boolean;
  fourthdiv: boolean=true;
  login: boolean = true;
  loginForm: boolean = true;
  companyForm: boolean;
  register: boolean;
  isActive:boolean = true;
  eye(){
    this.isActive = !this.isActive
  }
  log() {
    this.firstdiv = true;
    this.seconddiv = false;
    this.resetPassword = false;
    this. fourthdiv = true;
    this.login = true;
    this.register = false;
    this.loginForm = true;
    this.companyForm = false;


  }
  reg() {
    this. fourthdiv = true;
    this.firstdiv = false;
    this.seconddiv = true;
    this.resetPassword = false;
    this.register = true;
    this.login = false;
  }
  password(){
    this.resetPassword = true;
    this.loginForm = false;
    this.companyForm = false;
  }
  loginBtn(){
    this.loginForm = false;
    this.companyForm = true;
  }
  home(){
    this.router.navigate(['/view']);
  }
}
