import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Book extends Component {
  
  addFavorite = (book, value) => {
    this.props.alterFavorites(book,value);
  };

  render() {
    let book = this.props.book;
    return (
      <div className="book">
        <h5>{book.volumeInfo.title}</h5>
        <Link to={`/${book.id}`}>

        {book.volumeInfo.imageLinks && (
          <img src={book.volumeInfo.imageLinks.thumbnail} alt="test" />
        )}
        </Link>
        <p>{book.volumeInfo.authors}</p>

        <h6 onClick={() => this.addFavorite(this.props.book, "add")}>ADD</h6>
        <h6 onClick={() => this.addFavorite(this.props.book.id, "delete")}>DELETE</h6>
      </div>
    );
  }
}

export default Book;