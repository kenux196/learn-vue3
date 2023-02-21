export class Book {
  constructor(id, title, author, price, publishDate) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
    this.publishDate = publishDate;
  }
}

function createSampleBooks(count) {
  const books = [];
  for (let index = 0; index < count; index++) {
    const id = index + 1;
    const title = 'book ' + id;
    const author = 'kenux';
    const price = 10000;
    const publishDate = new Date(2022, id, 13).toLocaleDateString();
    const book = new Book(id, title, author, price, publishDate);
    books.push(book);
  }
  return books;
}

export const bookList = createSampleBooks(10);
bookList.forEach((element) => {
  console.log(element);
});
