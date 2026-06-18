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
const Book1 = new Book ("The Secret History", "Donna Tartt", 600 , true);
const Book2 = new Book ("The Invention of Morel", "Adolfo Bioy Casares" , 120, true);
const Book3 = new Book ("The Kites" , "Romain Gary", 320, false);
//PARAMETERS: takes a book instance (object)
function addBookToLibrary (BookInstance) {
    myLibrary.push(BookInstance);
}
addBookToLibrary(Book1); 
addBookToLibrary(Book2);
addBookToLibrary(Book3);

const cardContainer = document.getElementById("cardContainer");
function displayBook (array) {
    for (const book of array) {
        const card = document.createElement("div");
        const cardText = document.createElement("p");

        //u want to display the PROPERTIES of an obj 
        cardText.textContent = //youre assining one string (with 4 lines) to textContent 
            `Title: ${book.title}
            Author: ${book.author}
            Page Number: ${book.pageNo}
            Read Status: ${book.isRead}`
        //the text content should be each of these books and their attributes

        card.append(cardText);
        cardContainer.append(card);
    }
}

displayBook(myLibrary);

/*initial pseudocode:
1.create a button, onclick function add book
2.insdie the function , bring up a form where it requires user input
3.add button submit
4. button submit onlick, prevent default
5. create  a new book from user inputs
6. append new book to myLibrary, then display!*/

function addNewBook () {
    
}