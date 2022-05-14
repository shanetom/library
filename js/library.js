
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;

        this.info = function () {
            let endStatement = isRead === true ? "already read." : "not read yet.";
            return title + " by " + author + ", " + pages + " pages, " + endStatement;
        };
    }
}

function addBookToLibrary() {
    //ToDo: add code to take user input and store the book into the array
}

// Book class


// UI class
class UI {
    static displayBooks() {
        const StoredBooks = [];
        const books = StoredBooks;

        books.forEach((book) => UI.addBookToLibrary(book));
    }

    static addBookToLibrary(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.isRead}</td>
            <td><a href="#" class="btn delete">X</a></td>
            <td><a href="#" class="btn isRead">isRead</a></td>
        `;

        list.appendChild(row);
    }
}

// Store class

// Event display books
document.addEventListener('DOMContentLoaded', UI.displayBooks());

// Event add a book

// Remove a book
