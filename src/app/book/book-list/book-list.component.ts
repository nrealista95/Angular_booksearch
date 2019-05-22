import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { HttpResponse } from '@angular/common/http';
import { DataService } from 'src/app/shared/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  query: string;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private dataService: DataService) {
      route.params.subscribe(val => {
        this.dataService.currentQuery.subscribe(query => this.query = query);
        this.bookService.getBooks(this.query).subscribe(
          data => this.toBook(data),
          (error) => console.log(error)
        );
      });
     }

  ngOnInit() {
    this.dataService.currentQuery.subscribe(query => this.query = query);

    this.bookService.getBooks(this.query).subscribe(
      data => this.toBook(data),
      (error) => console.log(error)
    );
  }

  toBook(data: object): void {
    const results = data.docs;
    this.books = new Array();
    console.log(results);
    results.forEach(element => {
      if (element.hasOwnProperty('author_name') && element.hasOwnProperty('isbn')) {
        const book = new Book();
        book.author = element.author_name[0];
        book.name = element.title;
        book.isbn = element.isbn[0];
        if (element.hasOwnProperty('cover_edition_key'))  {
          book.openLibraryId = element.cover_edition_key;
        } else if (element.hasOwnProperty('edition_key')) {
          const ids = element.edition_key;
          book.openLibraryId = ids[0];
        }
        book.coverImgPath = 'http://covers.openlibrary.org/b/olid/' + book.openLibraryId + '-L.jpg?default=false';
        console.log(book);
        this.books.push(book);
      }
    });
    console.log(this.books);
  }

}
