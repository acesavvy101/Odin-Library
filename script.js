const myLibrary = [];

//lemme get this straight:
/*the contructor receives the values, then it stores the values into PROPERTIES */
function Book (title , author, pageNo, readStatus) { //parameter should describe the meaning not type!
    this.title = title;
    this.author = author;
    this.pageNo = pageNo;
    this.isRead = readStatus; //ure just storing the data, not changing it into a behavior
    this.bookId = crypto.randomUUID();
}

//PARAMETERS: takes a book instance (object)
function addBookToLibrary (BookInstance) {
    myLibrary.push(BookInstance);
}

const Book1 = new Book ("The Secret History", "Donna Tartt", 600 , true);


