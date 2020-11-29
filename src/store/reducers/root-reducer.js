import {combineReducers} from "redux";

import {Books} from "./books/books";


export const NameSpace = {
  BOOKS: `BOOKS`
};

export default combineReducers({
  [NameSpace.BOOKS]: Books
});