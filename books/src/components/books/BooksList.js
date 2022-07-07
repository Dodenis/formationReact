
const BooksList = (props) => {
    return (
        <>
        <button type="button" className="btn btn-success" onClick={() => props.onBookAddShow()}>Ajouter un livre</button>
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
                props.books.map(
                    book => {
                        return (
                            <tr key={book.id}>
                                <th scope="row">{book.id}</th>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.year}</td>
                                <td>{book.price}</td>
                                <td><button type="button" className="btn btn-primary" onClick={() => props.onBookEditShow(book)}>E</button></td>
                                <td><button type="button" className="btn btn-danger" onClick={() => props.onBookDelete(book.id)}>X</button></td>
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