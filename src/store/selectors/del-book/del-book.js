import {createSelector} from "reselect";

const selectItemBook = (id) => id;

export const selectDelBook = createSelector(
    selectItemBook,
    ({id, books}) => {
        const listBook = [];
        books.map((book) => book.id).filter((idBook, index) => {
            return idBook != id ? listBook.push(books[index]) : ``;
          });
        return listBook;
    }
);