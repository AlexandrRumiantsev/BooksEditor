import {createSelector} from "reselect";

const selectAllBooks = (data) => data;

export const getItemBook = createSelector(
    selectAllBooks,
    ({state, prop}) => {
        console.log(state.BOOKS.list);
        console.log(prop.match.params.id);
        
        return state.BOOKS.list.find((book) => {
            return prop.match.params.id === book.id
        });

        //return listBook;
     
    }
);