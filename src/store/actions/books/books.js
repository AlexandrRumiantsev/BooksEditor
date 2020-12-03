import {selectDelBook} from '../../selectors/del-book/del-book';
import {APIRoute} from '../../const';

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
    let books = JSON.parse(localStorage.books);

    const bookObj = {
        id: `22343242`,
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
        ]
      } 

      books.push(bookObj);
      localStorage.setItem(
        `books`, 
        JSON.stringify(books)
      );
      return books
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