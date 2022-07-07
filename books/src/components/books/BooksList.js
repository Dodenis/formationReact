import {useState} from 'react'

const BooksList = () => {
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

    return (
        <>
        <button type="button" className="btn btn-success">Ajouter un livre</button>
        <table className="table table-striped">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Titre</th>
            <th scope="col">Auteur</th>
            <th scope="col">Année</th>
            <th scope="col">Prix</th>
            <th scope="col">Editer</th>
            <th scope="col">Supprimer</th>
            </tr>
        </thead>
        <tbody>
            {
                books.map(
                    book => {
                        return (
                            <tr key={book.id}>
                                <th scope="row">{book.id}</th>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.year}</td>
                                <td>{book.price}</td>
                                <td><button type="button" className="btn btn-primary">E</button></td>
                                <td><button type="button" className="btn btn-danger" onClick={() => deleteBook(book.id)}>X</button></td>
                            </tr>
                        );
                    }
                )
            }
        </tbody>
        </table>
        </>
    );
}

export default BooksList; 