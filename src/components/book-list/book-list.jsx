import React from "react";
import BookItem from "../book-item/book-item";
import BookEmpty from "../books-empty/books-empty";

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

export default BookList;