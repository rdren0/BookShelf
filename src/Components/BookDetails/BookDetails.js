import React from "react";
import { Link } from 'react-router-dom'

export const BookDetails = book => {
  console.log(book);
  return (
    <div className="book">
    <Link to={`/`} className='back-btn'>◀ back</Link>
      <h5>{book.volumeInfo.title}</h5>
      <section className="purchase">
      {book.volumeInfo.imageLinks && (<img className="side-by-side" src={book.volumeInfo.imageLinks.thumbnail} alt="test" />)}
      <button className="side-by-side">Purchase now!</button>
      </section>
      <p>" {book.volumeInfo.description} "</p>
      <Link to={`/`} className='back-btn'>◀ back</Link>
    </div>
  );
};

export default BookDetails;
