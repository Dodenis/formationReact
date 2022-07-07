import {useState} from 'react'

import BooksList from "./books/BooksList";
import BooksAdd from "./books/BooksAdd";

const App = () => {

  // Pour gérer l'état du component dans une fonction il faut passer par 
    // les hooks (useState)
    const [books, setBooks] = useState([
      {
          id: 1,
          title: 'One Piece Tome 1',
          author: 'Eiichirō Oda',
          year: 2010,
          price: 15
      },
      {
          id: 2,
          title: 'Bleach Tome 5',
          author: 'Tite Kubo',
          year: 2015,
          price: 12
      },
      {
          id: 3,
          title: 'Naruto Tome 16',
          author: 'Masashi Kishimoto',
          year: 2006,
          price: 9
      }
  ]);

  const deleteBook = (id) => {
      if (window.confirm('Voulez vous supprimer ce livre ?')) {
          setBooks(books.filter(
              book => book.id !== id
          ));
      }
  }

  const onBookAdd = (event, book) => {
      event.preventDefault();
      let booksCopy = [...books];
      let nextId = 0;
      booksCopy.forEach(book => {
        if (book.id > nextId) {
          nextId = book.id;
        }
      });
      nextId++;

      let bookCopy = {...book};
      bookCopy['id'] = nextId;

      booksCopy.push(bookCopy);
      setBooks(booksCopy);
  }

  return (
    <div className="container">
      <h1>Gestion des livres</h1>
      <BooksList books = {books} deleteBook = {deleteBook} />
      <BooksAdd onBookAdd = {onBookAdd} />
    </div>
  );
}

export default App; 