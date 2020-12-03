import {books} from "../../mocks/books";

export const createLocalStorage = () => {
    //localStorage.setItem(`books`, JSON.stringify(books)) 
    return localStorage;
};