import { SET_ICON_FUNCTION } from "./actions";



const initialState = {
    iconFunction: null 
}


function riderReducer(state = initialState, action) {


    switch(action.type) {
        case SET_ICON_FUNCTION:
            return {
                ...state,
                iconFunction: action.payload
            }   
    }

    return state;
}

export default riderReducer;