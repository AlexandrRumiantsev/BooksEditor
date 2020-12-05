import {selectDelBook} from '../../selectors/del-book/del-book';
import {APIRoute} from '../../const';
import {indexedDBCreater} from '../../../serveces/Indexed-db/Indexed-db-creater';
import {createSendObjectBook} from '../../../helpers/create-send-object-book';

export const createBooks = () => (dispatch, _getState, localStorage) => {
    console.log(localStorage);
}

const redirectToRoute = (url) => (
    {
        type: url,
        payload: '/',
    }
);






export const addBook = (form) => (dispatch, _getState, localStorage) => {
    console.log(createSendObjectBook);
    return createSendObjectBook(form, `ADD`).then(books => {
        dispatch({
            type: `ADD_BOOK`,
            payload: {
                books
            }
        })
        return books;
    }).then(response => (
        dispatch(redirectToRoute(
            APIRoute.REDIRECT_TO_ROUTE
        ))
    ))
    

}

export const editBook = (form) => (dispatch, _getState, localStorage) => {

    return createSendObjectBook(form, `EDIT`).then(books => {
        dispatch({
            type: `EDIT_BOOK`,
            payload: {
                books
            }
        })
        return books;
    }).then(response => (
        dispatch(redirectToRoute(
            APIRoute.REDIRECT_TO_ROUTE
        ))
    ))

     
    
    
}





export const delBook = (id) => (dispatch, _getState, localStorage) => {
    let books = JSON.parse(localStorage.books);

    const newListBooks = selectDelBook(
        {
            id,
            books
        }
    );

    localStorage.setItem(
        `books`, 
        JSON.stringify(newListBooks)
    );

    dispatch({
        type: `DEL_BOOK`,

        payload: {
            id,
            books: newListBooks
        }
      });
}