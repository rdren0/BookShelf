import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Container from "../../Components/Container/Container";
import BookDetails from "../../Components/BookDetails/BookDetails";
import { key } from "../../API/key";
import { Route } from "react-router-dom";
import { Search } from "../Search/Search";
import { connect } from "react-redux";
import { fetchBooks } from "../../API/fetch";
import { getBooks, addFavorite, deleteFavorite } from "../../Actions";

export class App extends Component {
  componentDidMount = () => {
    this.fetchFirstBooks();
    this.getLocalStorage();
  };

  getLocalStorage = () => {
    let favorites = window.localStorage.getItem("Favorite Books");
    if (favorites) {
      favorites.split(",").forEach(book => {
        this.props.addFavorite(book);
      });
    }
  };
  fetchCategory = async URL => {
    await fetchBooks(URL).then(results => this.props.getBooks(results.items));
  };

  fetchFirstBooks = async () => {
    await fetchBooks(
      `https://www.googleapis.com/books/v1/volumes?q=Douglas+Adams&projection=lite&key=${key}`
    ).then(results => this.props.getBooks(results.items));
  };

  alterFavorites = (book, type) => {
    if (type === "add") {
      this.props.addFavorite(book);
    } else if (type === "delete") {
      this.props.deleteFavorite(book);
    }
    setTimeout(() => {this.updateStoreage()}, 1000) ;
  };

  updateStoreage = () => {
    window.localStorage.setItem("Favorite Books", JSON.stringify(this.props.favorites));
  };

  render() {
    return (
      <div>
        <h1>Bookshelf</h1>
        <Search fetchCategory={this.fetchCategory} />
        <Nav />
        <Route
          exact
          path="/"
          render={() => <Container alterFavorites={this.alterFavorites} />}
        />
        <Route
          path="/:id"
          render={({ match }) => {
            const { id } = match.params;
            const book = this.props.books.find(book => book.id === id);
            if (book) {
              return <BookDetails {...book} />;
            }
          }}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  books: state.books,
  favorites: state.favorites
});
export const mapDispatchToProps = dispatch => ({
  getBooks: books => dispatch(getBooks(books)),
  addFavorite: book => dispatch(addFavorite(book)),
  deleteFavorite: book => dispatch(deleteFavorite(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
