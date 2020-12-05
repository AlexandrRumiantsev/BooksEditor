import { extend } from "../../../helpers/extend";

const stateBooks = {
    list: [],
};


export default function Books(state = stateBooks, action) {
    console.log(action);
    switch (action.type) {
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