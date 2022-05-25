const exampleBook = new Book('Hogfather', 'Terry Pratchett', 350, true);
const exampleBook2 = new Book('The Left Hand of Darkness', 'Ursula K. Le Guin', 300, false);
let myLibrary = [exampleBook, exampleBook2];
const container = document.querySelector('.container');

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
  let book = new Book(name, author, pages, read);
  myLibrary.push(book);
  renderBooks();
}

function renderBooks() {
  container.innerHTML = '';
  myLibrary.forEach((book, i) => {
    const bookDiv = document.createElement('div');
    bookDiv.innerHTML =
      `<h3>${book.name}</h3><h4>${book.author}</h4>${book.pages} pages<br>${book.read ? "read" : "not read"}`;
    bookDiv.classList.add('book');
    container.appendChild(bookDiv);
  });
}

renderBooks();
