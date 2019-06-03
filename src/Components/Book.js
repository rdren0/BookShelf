import React, {Component} from 'react'

export class Book extends Component{
    constructor(){
        super()
        this.state={nothing: ''}
    }
    addFavorite = (book) => {
        window.localStorage.setItem("Favorite",  book.id);
    }

    render(){
        let book = this.props.book;
        return (
            <div className="book">
                <h5>{ book.volumeInfo.title }</h5>
                {book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.thumbnail} alt="test" />}
                <p>{book.volumeInfo.authors}</p>
                <h6 onClick={() => this.addFavorite(book)}>CLICK HERE</h6>
            </div>
        )
    }
}

export default Book;