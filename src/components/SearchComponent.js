import React, {useState, useRef} from "react"
import { IoIosSearch } from "react-icons/io";
import { Helmet } from "react-helmet";
import css from "../styles/searchComponent.module.css"


export default function SearchComponent({cssStyles = null, id = "searchDivContainer"}) {

    const inputRef = useRef(null)
    const [inputValue, setInputValue] = useState('');

    const styles = cssStyles ? cssStyles : css


    function onSearchDivClick() {
        if (inputRef.current) {
            // Focus the input elementf
            inputRef.current.focus();
          }
    }


    return(
        <div id={id} className={styles.SearchDivContainer }>

            <div onClick={onSearchDivClick} className={styles.searchDiv}>

                <IoIosSearch className={styles.searchIcon}/>
                <input
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