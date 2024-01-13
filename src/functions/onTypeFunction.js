import Store from "../store/Store"
import { setSearchedInputValue, setIconsToShow, setPreviousHash } from "../store/actions";

import iconSections from "../asets/iconsSections/iconSections.json"

const onTypeFunction = (typedValue) =>  {

    const searchResultsDiv = document.getElementById("searchResultsDiv");
    const headerSearchInput = document.getElementById("headerSearchInput")
    const searchInput = document.getElementById("searchInput")

    const dispatch = Store.dispatch

    
    if (searchResultsDiv && typedValue ) {
        if (headerSearchInput.value !== typedValue) {
            headerSearchInput.value = typedValue
            // headerSearchInput.focus()
        }
        if (searchInput.value !== typedValue) {
            searchInput.value = typedValue
            // searchInput.focus()
        } 
       

        
        const hashName = window.location.hash ? window.location.hash.replaceAll("-", " ") : null
        const name = hashName ? hashName.replace("#", "") : null
        const includesName = name ? iconSections.some(iconSection => iconSection.name === name) : null;

        if(includesName) {
            const previousHash = name.replaceAll(" ", "-")
            dispatch(setPreviousHash(previousHash))
        }
        
        window.location.hash = `search/#q=${typedValue}`;
        
        dispatch(setSearchedInputValue(searchInput.value))
        searchResultsDiv.style.zIndex = "5"
    } else {
        if (headerSearchInput.value !== typedValue) {
            headerSearchInput.value = typedValue
            // searchInput.focus()
        }
        if (searchInput.value !== typedValue) {
            searchInput.value = typedValue
            // searchInput.focus()
        } 


        const hashName = window.location.hash ? window.location.hash.replaceAll("-", " ") : null
        const name = hashName ? hashName.replace("#", "") : null
        const includesName = name ? iconSections.some(iconSection => iconSection.name === name) : null;

        if(includesName) {
            dispatch(setPreviousHash(name))
        }

        window.location.hash = `search/#q=${typedValue}`;
            
        
        dispatch(setSearchedInputValue(typedValue))
        searchResultsDiv.style.zIndex = "-1"
    }
}

export default onTypeFunction;
