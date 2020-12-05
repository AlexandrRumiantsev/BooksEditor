import {selectDelBook} from '../../selectors/del-book/del-book';
import {APIRoute} from '../../const';
import {indexedDBCreater} from '../../../serveces/Indexed-db/Indexed-db-creater';

export const createBooks = () => (dispatch, _getState, localStorage) => {
    console.log(localStorage);
}

const redirectToRoute = (url) => (
    {
        type: url,
        payload: '/',
    }
);


const createSendObject = async (form) => {
    let books = localStorage.books ? JSON.parse(localStorage.books) : [];
    let id = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
    }
    console.log(books);
    const bookObj = {
        id: id(),
        title: form.get('TITLE'),
        autorList: [
          {
            name: `Пушкин`,
            family: ``
          },
          {
            name: `Пушкин`,
            family: ``
          },
          {
            name: `Пушкин`,
            family: ``
          },
        ],
        img: form.get('FILE')
      } 

      books.push(bookObj);
      localStorage.setItem(
        `books`, 
        JSON.stringify(books)
      );


      return books
}

const createSendObjectTwo = async (form) => {

    let r = JSON.parse(localStorage.books).filter(element => {
        if(element.id != form.get('ID')){
            return element;
        }else return ''; 
    });



    let boObj = {
        id: form.get('ID'),
        title: form.get('TITLE'),
        autorList: [
          {
            name: `Пушкин`,
            family: ``
          },
          {
            name: `Пушкин`,
            family: ``
          },
          {
            name: `Пушкин`,
            family: ``
          },
        ],
        img: form.get('FILE')
      } 

        r.push(boObj);

      localStorage.removeItem(
        `books`
      );

      localStorage.setItem(
        `books`, 
        JSON.stringify(r)
      ); 

      return r;
}

export const addBook = (form) => (dispatch, _getState, localStorage) => {
    return createSendObject(form).then(books => {
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

    return createSendObjectTwo(form).then(books => {
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