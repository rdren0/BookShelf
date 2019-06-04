import React, { Component } from "react";
import Container from "../../Components/Container/Container";
import { fetchBooks } from "../../API/fetch";
import { connect } from "react-redux";
import { getBooks, addFavorite, deleteFavorite } from "../../Actions";
import { key } from "../../API/key";
import Nav from '../../Components/Nav/Nav'
import BookDetails from "../../Components/BookDetails/BookDetails";
import { Route } from "react-router-dom";



export class App extends Component {

  componentDidMount = () => {
    this.fetchFirstBooks();
    this.getLocalStorage();
  };


  getLocalStorage = () => {
    let favorites = (window.localStorage.getItem('Favorite Books'));
    if(favorites){
      favorites.split(',').forEach(book => {
        this.props.addFavorite(book)
    })
  }
}

  fetchFirstBooks = async () => {
    await fetchBooks(
      `https://www.googleapis.com/books/v1/volumes?q=React.js&projection=lite&key=${key}`
    ).then(results => this.props.getBooks(results.items));
  };

  alterFavorites = (book, type)=> {
    if (type === "add"){
      this.props.addFavorite(book);
    }else if(type === "delete"){
      this.props.deleteFavorite(book)
    }
    this.updateStoreage()
  };

  updateStoreage = () => {
    window.localStorage.setItem('Favorite Books', this.props.favorites);
  }


  render() {
    return (
      <div>
        <h1>Bookshelf</h1>
        <Nav/>
        <Route
          exact
          path="/"
          render={() => (
            <Container
            alterFavorites={this.alterFavorites}
            />)} />
        <Route
            path="/:id"
            render={({ match }) => {
              const { id } = match.params;
              const book = this.props.books.find(
                book => book.id === id
              );
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
