import { Injectable, EventEmitter } from '@angular/core';
import { Book } from './book.model';
import { HttpClient, HttpParams, HttpErrorResponse, HttpResponseBase, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly API_BASE_URL = 'http://openlibrary.org/';
  public bookSelected = new EventEmitter<Book>();

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  /**
   * GET request books with a given search parameter
   * @param query user input parameter
   */

  getBooks(query: string) {
    console.log(this.route.snapshot.queryParams);
    query = this.route.snapshot.queryParams.filter;
    console.log('Query on getBooks(): ' + query);
    query = query.trim();
    const baseSearch = this.API_BASE_URL + 'search.json?';
    const options = query ? { params: new HttpParams().set('q=', query) } : {};
    return this.httpClient.get(baseSearch, options);
  }

}
