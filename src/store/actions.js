

export const SET_ICON_FUNCTION = "SET_ICON_FUNCTION";
export const SET_ICONS_TO_SHOW = "SET_ICONS_TO_SHOW";
export const SET_SEARCH_INPUT_VALUE = "SET_SEARCH_INPUT_VALUE" 



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


export const setIconsToShow = setIconsToShow => dispatch  => {
  try{
  dispatch({
      type:  SET_ICONS_TO_SHOW,
      payload: setIconsToShow,
  })
  } catch (error) {
  console.log(`error in ${nameOfPage} > ${this.name}: ${error}`)
  }
};

export const setSeachInputValue = setSeachInputValue => dispatch  => {
  try{
  dispatch({
      type:  SET_SEARCH_INPUT_VALUE,
      payload: setSeachInputValue,
  })
  } catch (error) {
  console.log(`error in ${nameOfPage} > ${this.name}: ${error}`)
  }
};
