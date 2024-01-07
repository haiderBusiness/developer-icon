import React, {useState, useRef, useEffect} from "react"
import { IoIosSearch } from "react-icons/io";

import css from "../styles/searchComponent.module.css"
import {useDispatch, useSelector} from "react-redux"
import {setIconsToShow} from "../store/actions"
// import {setIconsToShow} from "../../"



export default function SearchComponent({cssStyles = null, id = "searchDivContainer", onType = null, inputId = "searchInput"}) {

    const inputRef = useRef(null)
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch()

    const { previousHash } = useSelector((state) => state.reducer)

    const styles = cssStyles ? cssStyles : css
    const [firstRender, setFirstRender] = useState(true)

    useEffect(() => {
        if(!firstRender) {
            // console.log("setOnType")
            console.log("inputValue", inputValue)
            onType(inputValue)
        } else {
            console.log("inputValue", inputValue)
            setFirstRender(false)
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


    const handleBlur = () => {
        const searchInput = document.getElementById(inputId)
        if (!searchInput.value || searchInput.value === "" && window.location.hash !== "#Ant-Design-Icons") {
            window.location.hash = previousHash ? previousHash.replaceAll(" ", "-") : "Ant-Design-Icons"
        }
    }

    return(
        <div className={styles.SearchDivContainer}>

            <div id={id} onClick={onSearchDivClick} className={styles.searchDiv}>

                <IoIosSearch className={styles.searchIcon}/>
                <input
                id={inputId}
                type="text"
                ref={inputRef} 
                // value={inputValue}  
                // Set the input value from state
                // onBlur={handleBlur}
                onChange={(event) => setInputValue(event.target.value)}  // Handle input value change
                onChange={(event) => onType(event.target.value)}
                placeholder="Search icons..." 
                // readOnly={true}
                />
            </div>
        </div>
    )
}