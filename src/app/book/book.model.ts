export class Book{
  public isbn: number;
  public name: string;
  public author: string;
  public coverImgPath: string;

  constructor(isbn: number, name: string, author: string, coverImgPath: string) {
    this.isbn = isbn;
    this.name = name;
    this.author = author;
    this.coverImgPath = coverImgPath;
  }
}
