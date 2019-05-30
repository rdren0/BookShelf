import React, {Component} from 'react'

export class Book extends Component{
    constructor(){
        super()
        this.state={nothing: ''}
    }

 
    render(){
        let {title, imageLinks} = this.props.book.volumeInfo;
        console.log(this.props.book)
        return (
            <div className="book">
            <h5>{title}</h5>
            <img src={imageLinks.thumbnail} alt={`thumbnail for ${title}`} />

    
            </div>
        )

    }
    
}

export default Book;