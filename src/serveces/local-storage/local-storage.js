import {books} from "../../mocks/books";

export const createLocalStorage = () => {
    const result = confirm('Обновить данные из Моков?');
    result ?  localStorage.setItem(`books`, JSON.stringify(books)) : localStorage;
    return localStorage;
};