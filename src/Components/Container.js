import React, { Component } from 'react'
import { Book } from './Book';
import { connect } from "react-redux";
import { getStartingBooks } from "../Actions";


export class Container extends Component {


    render() {
        let booksArray = this.props.books.reduce((acc,book) => {
            let newBook = <Book key ={book.id} book={book}/>
            acc.push(newBook)
            return acc;
        },[])
        return (
            <div className="container">
                {booksArray}
            </div>
        )
    }
}


export const mapStateToProps = state => ({
    books: state.books
  });
  export const mapDispatchToProps = dispatch => ({
    getStartingBooks: books => dispatch(getStartingBooks(books))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Container);