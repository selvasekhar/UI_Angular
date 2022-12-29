import { Component, OnInit } from '@angular/core';
import { PreloadService } from 'src/app/services/preload.service';

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.scss']
})
export class PreloadComponent implements OnInit {
  msg:boolean = true;
  constructor(public preload:PreloadService) { }

  ngOnInit() {
    this.preload.enablePreload().subscribe((msg) => {
      this.msg = msg;
    });
  }

}
