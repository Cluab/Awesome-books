/* eslint-disable */

//navigation functionality
let showAddf = () => {
    document.getElementById('list-section').setAttribute('class', 'non-show');
    document.getElementById('add-section').setAttribute('class', 'show');
    document.getElementById('contact-section').setAttribute('class', 'non-show');
    document.getElementById('books').setAttribute('class', 'books');
    document.getElementById('heading').setAttribute('class', 'non-show');
    document.getElementById('add').style.color = 'green';
  }
  
  
   let showList = () => {
    document.getElementById('list-section').setAttribute('class', 'show');
    document.getElementById('add-section').setAttribute('class', 'non-show');
    document.getElementById('contact-section').setAttribute('class', 'non-show');
    document.getElementById('books').setAttribute('class', 'books');
    document.getElementById('heading').setAttribute('class', 'heading');
    document.getElementById('add').style.color = 'black';
    document.getElementById('lis').style.color = 'green';
    document.getElementById('con').style.color = 'black';
  }
 let showAdd = () => {
    document.getElementById('add').style.color = 'green';
    document.getElementById('lis').style.color = 'black';
    document.getElementById('con').style.color = 'black';
    document.getElementById('list-section').setAttribute('class', 'non-show');
    document.getElementById('add-section').setAttribute('class', 'show');
    document.getElementById('contact-section').setAttribute('class', 'non-show');
    document.getElementById('books').setAttribute('class', 'books');
    document.getElementById('heading').setAttribute('class', 'non-show');
  }
let showcontact = () => {
    document.getElementById('books').setAttribute('class', 'non-show');
    document.getElementById('heading').setAttribute('class', 'non-show');
    document.getElementById('contact-section').setAttribute('class', 'show');
    document.getElementById('add').style.color = 'black';
    document.getElementById('lis').style.color = 'black';
    document.getElementById('con').style.color = 'green';
  }

  export {showList, showAdd, showcontact, showAddf}