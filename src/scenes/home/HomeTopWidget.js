import React, {useEffect, useRef, useState} from "react";
import styles from "../../styles/homeTopWidget.module.css"
import SearchComponent from "../../components/SearchComponent";
import Space from "../../components/Space";
import { useDispatch } from "react-redux";
import { setSearchedInputValue, setIconsToShow, setPreviousHash } from "../../store/actions";

import iconSections from "../../asets/iconsSections/iconSections.json"
import onTypeFunction from "../../functions/onTypeFunction";


function HomeTopWidget() {

    const dispatch = useDispatch()

    useEffect(() => {

        async function fetchAllIconsBasedOnSearch() {
            const searchString = window.location.hash;

            // Split the string using '#q=' as the delimiter and select the second part
            const querySearchString = searchString.split('#q=')[1];
        
            // console.log("queryString", queryString); // Output: s

            // console.log("querySearchString", querySearchString)
            onTypeFunction(querySearchString)
            console.log(querySearchString)
            const allIconsFunc = require("../../asets/all_icons").all_icons;
            const all_icons = await allIconsFunc();
            dispatch(setIconsToShow(all_icons));
        }

        if(window.location.hash.includes("search")) {
            fetchAllIconsBasedOnSearch()
        }
        
    }, [])


  return (
        <div className={styles.mainDiv}>
            
            <h1>
                Open source icons.
                <br/>
                <span>
                Lovingly hand-crafted.
                </span>
            </h1>

            <p className={styles.lead}>
                Premium designed icons for use in web, iOS, Android, and desktop apps. Support for SVG. Completely open source, MIT licensed and built by <a>Ionic</a>.
            </p>

            {/* <IconsTopNavigation/> */}

            <SearchComponent onType={(typedValue) => onTypeFunction(typedValue)}/>

            <Space height={20}/>
            
            {/* <IconsList/> */}

           
        </div>

  );
}

export default HomeTopWidget;
