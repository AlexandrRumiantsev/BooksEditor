import React from "react";

const BookItem = ({book, delBook}) => {
    return  (
        <article>
            {book.title}
            <button onClick={()=> delBook(book.id)}>
            </button>
        </article>
    )
}

export default BookItem;