import {createSelector} from "reselect";

const selectAllBooks = (state) => state.BOOKS;

export const selectFilteredBooks = createSelector(
    selectAllBooks,
    ({list, filter}) => {
        switch(filter){
            case 'alphabet':
                return list.sort((prev, next) => {
                    if ( prev.title < next.title ) return -1;
                    if ( prev.title < next.title ) return 1;
                });
            case 'age':
                return list.sort((prev, next) => {
                    if ( prev.age > next.age ) return -1;
                    if ( prev.age > next.age ) return 1;
                });
            case null:
                return JSON.parse(localStorage.getItem('books'))    
        }
       return list;
    }
);