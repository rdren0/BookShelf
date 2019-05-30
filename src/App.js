import React, { Component } from "react";
import Container from "./Components/Container";
import { fetchBooks } from "./API/fetch";
import { connect } from "react-redux";
import { getStartingBooks } from "./Actions";


export class App extends Component {
  constructor() {
    super();
    this.state = { books:[] };
    
  }

  fetchFirstBooks = async () => {
    let result = await fetchBooks().then(results => this.props.getStartingBooks(results.items))
    console.log(result.books)
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
