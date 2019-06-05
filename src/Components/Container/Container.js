import React, { Component } from "react";
import { Book } from "../Books/Book";
import { connect } from "react-redux";
import { getBooks } from "../../Actions";
import PropTypes from 'prop-types';


export class Container extends Component {
  render() {
    let booksArray = this.props.books.reduce((acc, book) => {
      let newBook = (
        <Book
          key={book.id}
          book={book}
          alterFavorites={this.props.alterFavorites}
        />
      );
      acc.push(newBook);
      return acc;
    }, []);
    return <div className="container">{booksArray}</div>;
  }
}
Container.propTypes = {
  books: PropTypes.array,
  getBooks: PropTypes.func
};

export const mapStateToProps = state => ({
  books: state.books
});
export const mapDispatchToProps = dispatch => ({
  getBooks: books => dispatch(getBooks(books))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
