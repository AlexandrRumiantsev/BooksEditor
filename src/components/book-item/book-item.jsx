import React from "react";
import {
    Link,
  } from "react-router-dom";

const BookItem = ({book, delBook}) => {
    return  (
        <article>
            {book.title}
            <img src={book.img} />
            <button onClick={()=> delBook(book.id)}>
                Удалить
            </button>
            <Link to={`/edit/${book.id}`}> Редактировать </Link>
        </article>
    )
}

export default BookItem;