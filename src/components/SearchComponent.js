import React, {useState, useRef, useEffect} from "react"
import { IoIosSearch } from "react-icons/io";

import css from "../styles/searchComponent.module.css"
import {useDispatch} from "react-redux"
import {setIconsToShow} from "../store/actions"
// import {setIconsToShow} from "../../"

let firstRender = true

export default function SearchComponent({cssStyles = null, id = "searchDivContainer", onType = null, inputId = "searchInput"}) {

    const inputRef = useRef(null)
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch()

    const styles = cssStyles ? cssStyles : css


    useEffect(() => {
        if(!firstRender && onType) {
            onType(inputValue)
        } else {
            firstRender = false
        }
       
        // return () => {
        //     firstRender = true
        // }
    }, [inputValue])

    async function onSearchDivClick() {
        if (inputRef.current) {
            // Focus the input elementf
            inputRef.current.focus();
        }

        const allIconsFunc = require("../asets/all_icons").all_icons;
        const all_icons = await allIconsFunc();
        
        dispatch(setIconsToShow(all_icons));
    }


    return(
        <div id={id} className={styles.SearchDivContainer }>

            <div onClick={onSearchDivClick} className={styles.searchDiv}>

                <IoIosSearch className={styles.searchIcon}/>
                <input
                id={inputId}
                type="text"
                ref={inputRef} 
                value={inputValue}  // Set the input value from state
                onChange={(event) => setInputValue(event.target.value)}  // Handle input value change
                placeholder="Search icons..." 
                />
            </div>
        </div>
    )
}