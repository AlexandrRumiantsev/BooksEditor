import React from "react";
import PropTypes from "prop-types";

import BookItem from "../book-item/book-item";
import BookEmpty from "../books-empty/books-empty";

import {bookItem} from "../../shapes/book-item";

const BookList = ({books, delBook}) => {
    
    if(books.length === 0) return (<BookEmpty />);

    return  (
        <div className="books-list">
            {
                books.map((book) => {
                    return (<BookItem delBook={delBook} key={book.id} book={book}/>)
                })
            }
        </div>
        
    )
}

BookItem.propTypes = {
    delBook: PropTypes.func,
    books: PropTypes.arrayOf(
        bookItem
    )
};
export default BookList;