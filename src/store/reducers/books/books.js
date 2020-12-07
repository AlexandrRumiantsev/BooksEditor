import { extend } from "../../../helpers/extend";

const stateBooks = {
    list: [],
    filter: localStorage.getItem('filter') ? localStorage.getItem('filter') : null
};


export default function Books(state = stateBooks, action) {

    switch (action.type) {
        case `CHANGE_FILTER`:
        localStorage.setItem('filter', action.payload.filter);
        return extend(state, {
            filter: action.payload.filter
        });
        case `LOAD_BOOKS`:
            return extend(state, {
                list: action.payload ? JSON.parse(action.payload) : ``
            });
        case `DEL_BOOK`:
            return extend(state, {
                list: action.payload.books
            });
        case `ADD_BOOK`:
            return extend(state, {
                list: action.payload.books,
            });
        case `EDIT_BOOK`:
            return extend(state, {
                list: action.payload.books,
            });    

    }
    return state;
}

export { Books };