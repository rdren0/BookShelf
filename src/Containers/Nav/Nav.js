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
    
    render() {
        return (
            <nav >
            <button onClick={() => this.fetchCategory("Mystery")}>Mystery</button>
            <button onClick={() => this.fetchCategory("Fiction")}>Fiction</button>
            <button onClick={() => this.fetchCategory("Science+Fiction")}>Science-Fiction</button>
            <button onClick={() => this.fetchCategory("Biography")}>Biography</button>
            <button onClick={() => this.fetchCategory("Horror")}>Horror</button>  
            <button onClick={() => this.fetchCategory("Romance")}>Romance</button>
            </nav>
        )
    }
}



  export const mapDispatchToProps = dispatch => ({
    getBooks: books => dispatch(getBooks(books))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(Nav);
  

