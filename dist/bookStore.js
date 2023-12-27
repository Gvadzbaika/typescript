class AuthorInfo {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
}
class BookInfo {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class MockBookService {
    constructor() {
        this.books = [
            new BookInfo("Rage of Angels", new AuthorInfo("Sidney Sheldon", 1917), 1980),
            new BookInfo("Master of the Game", new AuthorInfo("Sidney Sheldon", 1917), 1982),
            new BookInfo("Tucker's Way", new AuthorInfo("David Johnson", 1972), 2012),
        ];
    }
    getBookInfo(bookId) {
        const book = this.books.find((b, index) => index === bookId - 1);
        if (!book) {
            throw new Error("Book not found");
        }
        return book;
    }
    getAuthorInfo(authorId) {
        const book = this.books.find((b) => b.author.birthYear === authorId);
        if (!book) {
            throw new Error("Author not found");
        }
        return book.author;
    }
}
const bookService = new MockBookService();
const bookInfo1 = bookService.getBookInfo(1);
const bookInfo2 = bookService.getBookInfo(2);
const authorInfo = bookService.getAuthorInfo(1972);
console.log("Book 1:", bookInfo1);
console.log("Book 2:", bookInfo2);
console.log("Author:", authorInfo);