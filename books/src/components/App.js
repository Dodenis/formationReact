import {useState} from 'react'

import BooksList from "./books/BooksList";
import BooksAdd from "./books/BooksAdd";
import BooksEdit from './books/BooksEdit';

import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

const App = () => {
    const defaultEmpty = {
        title: '',
        author: '',
        year: 2000,
        price: 10
    }
    
    const navigate = useNavigate();

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
  const onBookAddSubmit = (event, book) => {
      event.preventDefault();
      const newId = books[books.length - 1].id + 1;
      
      setBooks([...books, {...book, id: newId}]);
      setBookAdd(defaultEmpty);
      navigate('/books');
  }

  const onBookAddCancel = (event) => {
      event.preventDefault();
      setBookAdd(defaultEmpty);
      navigate('/books');
  }

  /* ******************************
   * Edit book functions 
   ****************************** */
  const onBookEditSubmit = (event, bookEdited) => {
      event.preventDefault();
      setBookEdit({});

      setBooks([...books].map(
          (book) => {
              if (book.id === bookEdited.id) {
                  return bookEdited;
              }

              return book;
          }
      ));
      navigate('/books');
  }

  const getBookEditById = (id) => {
    return books.find(
      book => book.id === id
    )
  }

  return (
    <div className="container">
      <h1>Gestion des livres</h1>

      <Routes>
          <Route path="/books" exact element={<BooksList 
              books = {books}
              onBookDelete = {onBookDelete}/>} />
          <Route path="/books/add" element={<BooksAdd 
              book = {bookAdd}
              onBookAddSubmit = {onBookAddSubmit}
              onBookAddCancel = {onBookAddCancel} />} />
          <Route path="/books/edit/:id" element={<BooksEdit 
               getBookEditById={getBookEditById} 
               onBookEditSubmit={onBookEditSubmit}/>} />
      </Routes>
    </div>
  );
}

export default App; 