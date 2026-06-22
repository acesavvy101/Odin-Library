let myLibrary = [];

/*the contructor receives the values, then it stores the values into PROPERTIES */
function Book (title , author, pageNo, readStatus) { //parameter should describe the meaning not type!
    this.title = title;
    this.author = author;
    this.pageNo = pageNo;
    this.isRead = readStatus; //ure just storing the data, not changing it into a behavior
    this.bookId = crypto.randomUUID();
}

Book.prototype.toggleStatus = function () {
    //flip the book read status
    
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
//event delegation (put the event listener inside the parent element)
cardContainer.addEventListener("click", (e)=> {
    const item = e.target.closest("button"); 
    item.dataset.id //the button already has an ID!
    if (item.textContent === "Delete") {
        //REASSIGNING NOT DECLARING A NEW ONE DUMBASS
    myLibrary = myLibrary.filter(book => book.bookId !== item.dataset.id); //create a new array with everything that passes the conditional
    cardContainer.replaceChildren();
    displayBook(myLibrary)
    } else {
        
    } 
});

function displayBook (array) {
    for (const book of array) {
        const card = document.createElement("div");
        const cardText = document.createElement("p");
        const deleteBtn = document.createElement("button")
        const readBtn = document.createElement("button")

        readBtn.textContent = "read"
        deleteBtn.textContent = "Delete"
        //link each delete button with the bookinstance id
        deleteBtn.dataset.id = `${book.bookId}`
        readBtn.dataset.id = `${book.bookId}`

        //u want to display the PROPERTIES of an obj 
        cardText.textContent = //youre assining one string (with 4 lines) to textContent 
            `Title: ${book.title}
            Author: ${book.author}
            Page Number: ${book.pageNo}
            Read Status: ${book.isRead}
            Book ID: ${book.bookId}`
        //the text content should be each of these books and their attributes

        card.append(readBtn);
        card.append(cardText);
        card.append(deleteBtn)
        cardContainer.append(card);
    }
}
displayBook(myLibrary);

/*initial pseudocode:
1.create a button, onclick function add book
2.insdie the function , bring up a form where it requires user input
3.add button submit
4. button submit onlick, prevent default
5. create  a new book instance from user inputs
6. append new bookinstance to addBooktoLibrary which then pushes it into myLibrary arr, then display!
7. clear display, then render again*/

const newBookBtn = document.getElementById("newBookBtn");
const dialog = document.getElementById("dialog");
const closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn");

newBookBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal()
});

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close()
})

const titleValue = document.getElementById("titleInput");
const authorValue = document.getElementById("authorInput");
const pageNumberValue = document.getElementById("pageNumberInput");
const readStatusValue = document.getElementById("readStatusInput");

submitBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    //get the VALUES not textcontent of the inputs
    const newInstance = new Book (titleValue.value, authorValue.value, pageNumberValue.value, readStatusValue.value);
    addBookToLibrary(newInstance);

    //clear the previous items in the array to avoid duplicates!
    cardContainer.replaceChildren();
    displayBook(myLibrary)
})
