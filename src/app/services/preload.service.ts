import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloadService {
  private subject = new Subject();

  constructor() {
    
  }
  enablePreload(): Observable<any> {
    return this.subject.asObservable();
  }
  
  show(msg) {
    this.subject.next(msg);
  }
}
