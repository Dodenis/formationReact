import { Link } from "react-router-dom";

const BooksList = (props) => {
    return (
        <>
        <Link to="/books/add" type="button" className="btn btn-success"><i className="bi-book"></i> Ajouter un livre</Link>
        <table className="table table-striped">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Titre</th>
            <th scope="col">Auteur</th>
            <th scope="col">Année</th>
            <th scope="col">Prix</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                props.books.map(
                    book => {
                        return (
                            <tr key={book.id}>
                                <th scope="row">{book.id}</th>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.year}</td>
                                <td>{book.price}</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <Link to={"/books/edit/" + book.id} className="btn btn-primary"><i className="bi-pencil"></i></Link>
                                        <button type="button" className="btn btn-danger" onClick={() => props.onBookDelete(book.id)}><i className="bi-trash"></i></button>
                                    </div>
                                </td>
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