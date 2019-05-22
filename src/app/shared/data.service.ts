import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  inputQuery: string;
  querySource = new BehaviorSubject(this.inputQuery);
  currentQuery = this.querySource.asObservable();

  constructor() {}

  queryMessage(query: string) {
    this.querySource.next(query);
  }

}
