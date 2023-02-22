import { Book } from './Book.js';
import { convertISODateString } from './DateTimeFormmat.js';

export class BookRepository {
  constructor() {
    this.books = new Map();
  }

  findAll() {
    return Array.from(this.books.values());
  }

  findById(id) {
    return this.books.get(id);
  }

  updateById(id, book) {
    const foundBook = this.findById(id);
    foundBook.updateData(book);
  }

  save(book) {
    book.setId(this.generateId());
    this.books.set(book.id, book);
  }

  generateId() {
    return this.books.size + 1;
  }

  init(count) {
    console.log('BookRepository.init()');
    for (let index = 0; index < count; index++) {
      const id = index + 1;
      const title = 'book ' + id;
      const author = 'kenux';
      const price = 10000;
      const publishDate = new Date(2022, id, 13).toISOString().split('T')[0];
      const book = Book.createBook(title, author, price, publishDate);
      console.log('created book ' + book.title);
      this.save(book);
    }
  }
}

export const bookMemoryRepository = new BookRepository();
bookMemoryRepository.init(10);
const books = bookMemoryRepository.findAll();
console.log(books);
books.forEach((book) => console.log(book));

const book = Book.createBook(
  '슈퍼맨',
  '김작가',
  20000,
  convertISODateString(new Date())
);
bookMemoryRepository.updateById(1, book);
console.log(bookMemoryRepository.findById(1));
// console.log(books.keys());
// console.log(books.values());
