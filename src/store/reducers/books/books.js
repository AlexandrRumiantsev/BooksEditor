import { extend } from "../../../helpers/extend";

const stateBooks = {
    list: ``,
};


export default function Books(state = stateBooks, action) {

    switch (action.type) {
        case `LOAD_BOOKS`:
            return extend(state, {
                list: action.payload
            });
    }
    return state;
}

export { Books };