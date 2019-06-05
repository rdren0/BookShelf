import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'


export class Book extends Component {
  constructor(){
    super();
    this.state={
      favorited: false,
    }
  }

  
  addFavorite = (book, value) => {
    let newState = !this.state.favorited
    this.setState({favorited: newState})
    this.props.alterFavorites(book,value);
  };

  render() {
    let book = this.props.book;
    return (
      <div className="book">
        <h5>{book.volumeInfo.title}</h5>
        <Link to={`/${book.id}`}>
        {book.volumeInfo.imageLinks && (<img src={book.volumeInfo.imageLinks.thumbnail} alt="test" />)}
        </Link>
        <p>{book.volumeInfo.authors}</p>
        {!this.state.favorited && (<button className="favorites" onClick={() => this.addFavorite(book, "add")}>ADD</button>)}
        {this.state.favorited && (<button className="favorites" onClick={() => this.addFavorite(book, "delete")}>DELETE</button>)}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  favorites: state.favorites
});


export default connect(
  mapStateToProps,
  null
)(Book);