import { Component, OnInit } from '@angular/core';

import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit {

  selectedBook: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.bookSelected.subscribe(
      (book: Book) => {
        this.selectedBook = book;
      }
    )
  }

}
