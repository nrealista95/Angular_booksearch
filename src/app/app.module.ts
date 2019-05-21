import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BookListComponent } from './book/book-list/book-list.component';
import { SearchComponent } from './search/search.component';
import { BookComponent } from './book/book.component';
import { BookItemComponent } from './book/book-list/book-item/book-item.component';
import { SharedModule } from './shared/shared.module';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    SearchComponent,
    BookComponent,
    BookItemComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
