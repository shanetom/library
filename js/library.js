let myLibary = [];

// Book class
class Book {
    constructor(title, author, pages, isRead) {
        if (isRead === "on") {
            isRead = true;
        } else {
            isRead = false;
        }

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

// UI class
class UI {
    static displayBooks() {
        myLibary.forEach((book) => UI.addBookToLibrary(book));
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
        myLibary.push(book);
    }

    static deleteBook(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = '';
        document.querySelector('#isRead').checked = false;
    }
}

// Event display books
document.addEventListener('DOMContentLoaded', UI.displayBooks());

// Event add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // prevent actual submit event
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#isRead').value;

    const book = new Book(title, author, pages, isRead);
    UI.addBookToLibrary(book);

    // clear fields on the page
    UI.clearFields();
});

// Remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
});
