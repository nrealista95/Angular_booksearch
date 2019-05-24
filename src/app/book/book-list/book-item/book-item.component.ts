import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../book.model';
import { BookService } from '../../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }

  onSelect() {
    console.log('onSelect called ');
    this.bookService.bookSelected.emit(this.book);
  }

}
