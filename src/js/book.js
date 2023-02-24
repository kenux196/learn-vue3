export class Book {
  constructor(title, author, price, publishDate) {
    this.id = null;
    this.title = title;
    this.author = author;
    this.price = price;
    this.publishDate = publishDate;
  }

  static createBook(title, author, price, publishDate) {
    return new Book(title, author, price, publishDate);
  }

  setId(id) {
    this.id = id;
  }

  updateData(book) {
    this.title = book.title;
    this.author = book.author;
    this.price = book.price;
    this.publishDate = book.publishDate;
  }
}
