import {showAddddff, showAdd, showList, showcontact} from "./modules/nav.js";//imports navigation functionality
import booking from "/modules/bookinfo.js";//imports creating Object and adding it to the list functionality
import Store from "./modules/store.js";//local Storage functionality
  

showAddddff()//highlights the page that your on when you open the website 

function ondate() {
  document.querySelector('.date').innerHTML = Date();
}

ondate();



document.getElementById('add').addEventListener('click', () => {
  showAdd();//switch to the add book section and highlight it.
});
document.getElementById('lis').addEventListener('click', () => {
  showList();//switch to the books list section and highlight it.
});
document.getElementById('con').addEventListener('click', () => {
  showcontact();//switch to the contact section and highlight it.
});


//adds the book to the book list and local storage and empty's the input section
document.addEventListener('DOMContentLoaded', booking);
document.querySelector('.bookInfo').addEventListener('submit', (e) => {
  e.preventDefault();

  let Title = document.querySelector('.title').value;
  let Author = document.querySelector('.author').value;


  const book = new booking(Title, Author);
  booking.addBookToList(book);
  Store.getBooks();
  Store.addBook(book);
  document.querySelector('.title').value = "";
  document.querySelector('.author').value = "";
});


// removes the book from the list and the local storage
document.querySelector('.books_list').addEventListener('click', (e) => {
  booking.deleteBook(e.target);
  Store.removeBook(e.target.getAttribute('data-id'));


});


//retrieves the data from the local storage and reveal it in the list.
const retrieveData = localStorage.getItem('books');
const body = document.querySelector('body');
body.onload = () => {
  if (retrieveData) {
    const previousData = JSON.parse(retrieveData);
    for (let i = 0; i < previousData.length; i += 1) {
      booking.addBookToList(previousData[i]);
    }
  }
};