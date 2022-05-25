const exampleBook = new Book('Hogfather', 'Terry Pratchett', 350, true);
const exampleBook2 = new Book('The Left Hand of Darkness', 'Ursula K. Le Guin', 300, false);
let myLibrary = [exampleBook, exampleBook2];
const container = document.querySelector('.container');
const form = document.querySelector('form');

const newButton = document.querySelector('#newbook');
newButton.addEventListener('click', function (e) {
  form.classList.toggle('hidden');
});

form.addEventListener('submit', function (e) {
  let name = this.querySelector('#name').value;
  let author = this.querySelector('#author').value;
  let pages = this.querySelector('#pages').value;
  let read = this.querySelector('#read').checked;

  addBookToLibrary(name, author, pages, read);

  e.preventDefault();
});

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

function toggleRead(e) {
  let index = Number(this.getAttribute('data-index'));
  myLibrary[index].read = !myLibrary[index].read;
  renderBooks();
}

function deleteBook(e) {
  let index = Number(this.getAttribute('data-index'));
  myLibrary.splice(index, 1);
  renderBooks();
}

function renderBooks() {
  container.innerHTML = '';
  myLibrary.forEach((book, i) => {
    const bookDiv = document.createElement('div');
    bookDiv.innerHTML =
      `<h3>${book.name}</h3><h4>${book.author}</h4><p>${book.pages} pages</p><p>${book.read ? "read" : "not read"}</p>`;

    let readButton = document.createElement('button');
    readButton.textContent = 'Read/Unread';
    readButton.addEventListener('click', toggleRead);
    readButton.classList.add('read-button');
    readButton.setAttribute('data-index', i);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteBook);
    deleteButton.classList.add('delete-button');
    deleteButton.setAttribute('data-index', i);

    bookDiv.appendChild(readButton);
    bookDiv.appendChild(deleteButton);
    bookDiv.classList.add('book');
    container.appendChild(bookDiv);
  });
}

renderBooks();
