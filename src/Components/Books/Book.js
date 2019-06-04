import React, { Component } from "react";
import { connect } from "react-redux";
import { getStartingBooks, addFavorites } from "../../Actions/index";

export class Book extends Component {
  addFavorite = () => {
    this.props.addFavorites(this.props.book.id);
  };

  render() {
    let book = this.props.book;
    return (
      <div className="book">
        <h5>{book.volumeInfo.title}</h5>
        {book.volumeInfo.imageLinks && (
          <img src={book.volumeInfo.imageLinks.thumbnail} alt="test" />
        )}
        <p>{book.volumeInfo.authors}</p>
        <h6 onClick={() => this.addFavorite()}>CLICK HERE</h6>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  books: state.books,
  favorites: state.favorites
});
export const mapDispatchToProps = dispatch => ({
  getStartingBooks: books => dispatch(getStartingBooks(books)),
  addFavorites: book => dispatch(addFavorites(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
