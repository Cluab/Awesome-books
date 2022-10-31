
//creating Object and adding it to the list functionality
export default class BookInfo {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.id = Date.now();
    }
  
    static Add = (title, author) => {
      BookInfo(title, author);
    }
  
    static addBookToList = (book) => {
      const booksList = document.getElementById('books_list');
      const row = document.createElement('div');
      row.className = 'listWrapper';
      row.innerHTML += `
              <h3> ${book.title}</h3>
              <h3> ${book.author}</h3>
              <button type="submit" data-id="${book.id}" class="delete">Remove</button>
            `;
    booksList.appendChild(row);
    }

    static deleteBook = (el) => {
            if (el.classList.contains('delete')) {
              el.parentElement.remove();
            }
}
}