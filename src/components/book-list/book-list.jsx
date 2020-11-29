import React, {PureComponent} from "react";

const BookList = ({books}) => {
    return  (
        books.map((book) => {
            return <h1>{book.title}</h1>
        })
    )
}

export default BookList;