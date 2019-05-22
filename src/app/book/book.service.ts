import { Injectable, EventEmitter } from '@angular/core';
import { Book } from './book.model';
import { HttpClient, HttpParams, HttpErrorResponse, HttpResponseBase, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly API_BASE_URL = 'http://openlibrary.org/';
  public bookSelected = new EventEmitter<Book>();

  // books: Book[] = [
  //   new Book(
  //     124,
  //     'paraiso',
  //     'Bruno Nogueira',
  //     'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?cs=srgb&dl=book-pages-chapter-dark-5834.jpg&fm=jpg'
  //   ),
  //   new Book(
  //     64532,
  //     'Mel e Chuva',
  //     'Antonio Dasmarinas',
  //     'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?cs=srgb&dl=book-pages-chapter-dark-5834.jpg&fm=jpg'
  //   ),
  // ];
  constructor(private httpClient: HttpClient) {}

  // /**
  //  * GET request books with a given search parameter
  //  * @param query user input parameter
  //  */
  // getBooks(query?: string): Observable<Book[]> {
  //   query = 'harry potter and the cursed child'; // Test purposes REMOVE
  //   query = query.trim();
  //   const baseSearch = this.API_BASE_URL + 'search.json?';
  //   const options = query ? { params: new HttpParams().set('q=', query) } : {};
  //   console.log('URL --> ' + baseSearch + options);

  //   return this.httpClient.get<Book[]>(baseSearch, options)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  getBooks() {
    let query = 'harry potter and the cursed child'; // Test purposes REMOVE
    query = query.trim();
    const baseSearch = this.API_BASE_URL + 'search.json?';
    const options = query ? { params: new HttpParams().set('q=', query) } : {};
    return this.httpClient.get(baseSearch, options);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
