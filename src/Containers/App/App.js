import React, { Component } from "react";
import Container from "../../Components/Container/Container";
import { fetchBooks } from "../../API/fetch";
import { connect } from "react-redux";
import { getStartingBooks, addFavorites } from "../../Actions";
import { key } from "../../API/key";

export class App extends Component {
  constructor() {
    super();
    this.state = { books: [] };
  }

  componentDidMount = () => {
    this.fetchFirstBooks();
  };

  fetchFirstBooks = async () => {
    await fetchBooks(
      `https://www.googleapis.com/books/v1/volumes?q=React.js&orderBy=newest&key=${key}`
    ).then(results => this.props.getStartingBooks(results.items));
  };

  addFavorites = book => {
    this.props.addFavorites(book);
  };
  render() {
    return (
      <div>
        <h1>Bookshelf</h1>
        <select>
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Science-Fiction</option>
          <option>Mystery</option>
        </select>

        <Container addFavorites={this.addFavorites} />
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
)(App);
