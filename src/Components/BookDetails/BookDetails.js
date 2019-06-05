import React from "react";
import { Link } from 'react-router-dom'

export const BookDetails = book => {
  return (
    <div className="book">
    {/* istanbul ignore next */}
    <Link to={`/`} className='back-btn'>◀ back</Link>
      <h5>{book.volumeInfo.title}</h5>
      <section className="purchase">
      {book.volumeInfo.imageLinks && (<img className="side-by-side" src={book.volumeInfo.imageLinks.thumbnail} alt="test" />)}
      {book.saleInfo.buyLink && (<h5>{book.saleInfo.listPrice.amount}</h5> )}
      {book.saleInfo.buyLink && (<a className="button" href={book.saleInfo.buyLink}>Purchase</a>)}
      </section>
      <p> {book.volumeInfo.description} </p>
      {/* istanbul ignore next */}
      <Link to={`/`} className='back-btn'>◀ back</Link>
    </div>
  );
};

export default BookDetails;
