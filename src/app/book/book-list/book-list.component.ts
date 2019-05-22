import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
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
        book.coverImgPath = '';
        console.log(book);
        this.books.push(book);
      }
    });
    console.log(this.books);
  }

}
