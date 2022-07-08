import { useState } from "react";

const BooksEdit = (props) => {
    const [book, setBook] = useState(props.book);

    const onFieldChanged = ({target}) => {
        setBook({...book, [target.name]: target.value});
    }

    return (
        <form className="row g-3" onSubmit={(event) => props.onBookEditSubmit(event, book)}>
            <h2>Editer un livre</h2>
            <div className="col-12">
                <label htmlFor="book-title" className="form-label">Titre: </label>
                <input type="text" className="form-control" id="book-title" name="title" value={book.title} onChange={(event) => onFieldChanged(event)} />
            </div>
            <div className="col-12">
                <label htmlFor="book-author" className="form-label">Auteur: </label>
                <input type="text" className="form-control" id="book-author" name="author" value={book.author} onChange={(event) => onFieldChanged(event)} />
            </div>
            <div className="col-12">
                <label htmlFor="book-year" className="form-label">Année: </label>
                <input type="number" className="form-control" id="book-year" name="year" value={book.year} onChange={(event) => onFieldChanged(event)} />
            </div>
            <div className="col-12">
                <label htmlFor="book-price" className="form-label">Prix: </label>
                <input type="number" className="form-control" id="book-price" name="price" value={book.price} onChange={(event) => onFieldChanged(event)} />
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Valider</button>
                <button className="btn btn-danger" type="button" onClick={() => props.onBookEditCancel()} >Annuler</button>
            </div>
        </form>
    );
}

export default BooksEdit;