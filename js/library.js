let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function() {
        let endStatement = isRead === true ? "already read." : "not read yet.";
        return title + " by " + author + ", " + pages + " pages, " + endStatement;
    }
}

function addBookToLibrary() {
    //ToDo: add code to take user input and store the book into the array
}
