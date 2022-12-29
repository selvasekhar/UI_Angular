import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  userDetail:boolean;
  show(){
    this.userDetail= true;
  }
  close()
{
  this.userDetail= false;
}
  click()
{
  this.userDetail= !this.userDetail;
}
}
