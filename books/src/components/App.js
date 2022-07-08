import { useState, useEffect } from 'react'

import BooksList from "./books/BooksList";
import BooksAdd from "./books/BooksAdd";
import BooksEdit from './books/BooksEdit';

import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

const App = () => {
  const baseUrl = "http://localhost:3000/books";
  const apiHandleErrors = (response) => {
      if (!response.ok) {
          throw Error(response.statusText);
      }

      return response;
  }
  const apiLoadBooks = () => {
    fetch(baseUrl)
      .then(apiHandleErrors)
      .then(response => response.json())
      .then(response => {
        setBooks([...response]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const apiAddBooks = (newBook) => {
    fetch(baseUrl, {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify(newBook)
    })
      .then(apiHandleErrors)
      .then(response => response.json())
      .then(response => {
        // On reset les inputs
        setBookAdd(defaultEmpty);
        // On recharge la liste
        apiLoadBooks();
        // On redirige
        navigate('/books');
      })
      .catch(err => {
        console.log(err);
      });
  }

  const apiDeleteBooks = (id) => {
    fetch(baseUrl + '/' + id, {
      "method": "DELETE"
    })
      .then(apiHandleErrors)
      .then(response => response.json())
      .then(response => {
        apiLoadBooks();
      })
      .catch(err => {
        console.log(err);
      });
  }

  const apiUpdateBooks = (editedBook) => {
    fetch(baseUrl + '/' + editedBook.id, {
      "method": "PUT",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify(editedBook)
    })
      .then(apiHandleErrors)
      .then(response => response.json())
      .then(response => {
        apiLoadBooks();
        // On redirige
        navigate('/books');
      })
      .catch(err => {
        console.log(err);
      });
  }

  const defaultEmpty = {
    title: '',
    author: '',
    year: 2000,
    price: 10
  }

  const navigate = useNavigate();

  // Pour gérer l'état du component dans une fonction il faut passer par 
  // les hooks (useState)
  const [books, setBooks] = useState([]);

  // Lancement d'un traitement en fonction d'un changement d'état/montage
  // Ici on charge les données au montage du component
  useEffect(
    () => {
      apiLoadBooks();
    },
    []
  );

  const [bookAdd, setBookAdd] = useState(defaultEmpty);
  const [bookEdit, setBookEdit] = useState({});

  /* ******************************
   * Deletes book functions 
   ****************************** */
  const onBookDelete = (id) => {
    if (window.confirm('Voulez vous supprimer ce livre ?')) {
      apiDeleteBooks(id);
    }
  }

  /* ******************************
   * Add book functions 
   ****************************** */
  const onBookAddSubmit = (event, book) => {
    event.preventDefault();
    // On enregistre sur le serveur
    apiAddBooks(book);
  }

  const onBookAddCancel = (event) => {
    event.preventDefault();
    // On reset les inputs
    setBookAdd(defaultEmpty);
    // On redirige
    navigate('/books');
  }

  /* ******************************
   * Edit book functions 
   ****************************** */
  const onBookEditSubmit = (event, bookEdited) => {
    event.preventDefault();
    // On enregistre sur le serveur
    apiUpdateBooks(bookEdited);
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
          books={books}
          onBookDelete={onBookDelete} />} />
        <Route path="/books/add" element={<BooksAdd
          book={bookAdd}
          onBookAddSubmit={onBookAddSubmit}
          onBookAddCancel={onBookAddCancel} />} />
        <Route path="/books/edit/:id" element={<BooksEdit
          getBookEditById={getBookEditById}
          onBookEditSubmit={onBookEditSubmit} />} />
      </Routes>
    </div>
  );
}

export default App; 