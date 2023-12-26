import { SET_ICON_FUNCTION, SET_ICONS_TO_SHOW, SET_SEARCH_INPUT_VALUE } from "./actions";



const initialState = {
    iconFunction: null,
    iconsToShow: null,
    searchInputValue: null,
}


function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_ICON_FUNCTION:
            return {
                ...state,
                iconFunction: action.payload
            }
        case SET_ICONS_TO_SHOW:
            return {
                ...state,
                iconsToShow: action.payload
            }
        case SET_SEARCH_INPUT_VALUE:
            return {
                ...state,
                searchInputValue: action.payload
            }
    }

    return state;
}

export default reducer;