import {useState} from 'react'

import BooksList from "./books/BooksList";
import BooksAdd from "./books/BooksAdd";
import BooksEdit from './books/BooksEdit';

const App = () => {
    const defaultEmpty = {
        title: '',
        author: '',
        year: 2000,
        price: 10
    }
    
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
  const [bookAdd, setBookAdd] = useState(defaultEmpty);
  const [bookEdit, setBookEdit] = useState({});
  const [action, setAction] = useState('');

  /* ******************************
   * Deletes book functions 
   ****************************** */
  const onBookDelete = (id) => {
      if (window.confirm('Voulez vous supprimer ce livre ?')) {
          setBooks(books.filter(
              book => book.id !== id
          ));
      }
  }

  /* ******************************
   * Add book functions 
   ****************************** */
  const onBookAddShow = () => {
      setAction('add');
  }

  const onBookAddSubmit = (event, book) => {
      event.preventDefault();
      const newId = books[books.length - 1].id + 1;
      
      setBooks([...books, {...book, id: newId}]);
      setBookAdd(defaultEmpty);
      setAction('');
  }

  const onBookAddCancel = (event) => {
      event.preventDefault();
      setBookAdd(defaultEmpty);
      setAction('');
  }

  /* ******************************
   * Edit book functions 
   ****************************** */
  const onBookEditShow = (book) => {
      console.log(book);
      setBookEdit(book);
      setAction('edit');
  }

  const onBookEditSubmit = (event, bookEdited) => {
      event.preventDefault();
      console.log(bookEdited);
      setBookEdit({});

      setBooks([...books].map(
          (book) => {
              if (book.id === bookEdited.id) {
                  return bookEdited;
              }

              return book;
          }
      ));
      
      setAction('');
  }

  const onBookEditCancel = () => {
     setBookEdit({});
     setAction('');
  }

  return (
    <div className="container">
      <h1>Gestion des livres</h1>
      <BooksList books = {books} onBookDelete = {onBookDelete} onBookEditShow = {onBookEditShow} onBookAddShow = {onBookAddShow} />
      {action === 'add' && (<BooksAdd book = {bookAdd} onBookAddSubmit = {onBookAddSubmit} onBookAddCancel = {onBookAddCancel} />)}
      {action === 'edit' && (<BooksEdit book = {bookEdit} onBookEditSubmit = {onBookEditSubmit} onBookEditCancel = {onBookEditCancel} />)}
    </div>
  );
}

export default App; 