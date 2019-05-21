import { Injectable, EventEmitter } from '@angular/core';
import { Book } from './book.model';
import { HttpClient, HttpParams, Http} from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly API_BASE_URL = 'http://openlibrary.org/';

  public bookSelected = new EventEmitter<Book>();

  books: Book[] = [
    new Book(
      124,
      'paraiso',
      'Bruno Nogueira',
      'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?cs=srgb&dl=book-pages-chapter-dark-5834.jpg&fm=jpg'
    ),
    new Book(
      64532,
      'Mel e Chuva',
      'Antonio Dasmarinas',
      'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?cs=srgb&dl=book-pages-chapter-dark-5834.jpg&fm=jpg'
    ),
  ];
  constructor(private httpClient: HttpClient) { }

  // getBooks() {
  //   return this.books.slice();
  // }

  /**
   *
   * @param query
   */
  getBooks(query?: string): Observable<Book[]> {
    query = 'harry potter and the cursed child'; // Test purposes REMOVE
    query = query.trim();
    const options = query ?
   { params: new HttpParams().set('search.json?q=', query) } : {};

    return this.httpClient.get<Book[]>(this.API_BASE_URL, options)
      .pipe(
        catchError(this.handleError)
      );
  }
}
