

export const SET_ICON_FUNCTION = "SET_ICON_FUNCTION";



const nameOfPage = "actions.js"

export const setIconFunction = setIconFunction => dispatch  => {
    try{
    dispatch({
        type:  SET_ICON_FUNCTION,
        payload: setIconFunction,
    })
    } catch (error) {
    console.log(`error in ${nameOfPage} > ${this.name}: ${error}`)
  }
};
