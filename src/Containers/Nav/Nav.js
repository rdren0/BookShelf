import React, { Component } from 'react';
import '../../Containers/App/App.css';
import { connect } from 'react-redux'
import { getBooks } from "../../Actions";
import { fetchBooks } from '../../API/fetch'


export class Nav extends Component {

    fetchCategory = async (value) => {
        await fetchBooks(`https://www.googleapis.com/books/v1/volumes?q=+subject:${value}&projection=lite&orderBy=newest`
        ).then(results => this.props.getBooks(results.items));
    }
    viewFavorites = () => {
      let newBooks = this.props.favorites;
      this.props.getBooks(newBooks)
    }
    
    render() {
        return (
            <nav >
            <button onClick={() => this.fetchCategory("Mystery")}>Mystery</button>
            <button onClick={() => this.fetchCategory("Fiction")}>Fiction</button>
            <button onClick={() => this.fetchCategory("Science+Fiction")}>Science-Fiction</button>
            <button onClick={() => this.fetchCategory("Biography")}>Biography</button>
            <button onClick={() => this.fetchCategory("Horror")}>Horror</button>  
            <button onClick={() => this.fetchCategory("Romance")}>Romance</button>
            <button onClick={() => this.viewFavorites()}>View Favorites</button>
            </nav>
        )
    }
}

  export const mapStateToProps = (state) => ({
    favorites: state.favorites
  })

  export const mapDispatchToProps = dispatch => ({
    getBooks: books => dispatch(getBooks(books))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Nav);
  

