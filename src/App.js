import React, { Component } from "react";
import Container from "./Components/Container";
import { fetchBooks } from "./API/fetch";
import { connect } from "react-redux";
import { getStartingBooks } from "./Actions";
import { key } from './API/key';



export class App extends Component {
  constructor() {
    super();
    this.state = { books:[] };
    
  }

  fetchFirstBooks = async () => {
    let result = await fetchBooks(`https://www.googleapis.com/books/v1/volumes?q=React.js&orderBy=newest&key=${key}`).then(results => this.props.getStartingBooks(results.items))
    this.setState({
      books:result.books})
  }

  componentDidMount = () => {
    this.fetchFirstBooks()
  };

  render() {
    return (
      <div>
      <h1>Bookshelf</h1>
      
        <Container />
      </div>
    );
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
)(App);
