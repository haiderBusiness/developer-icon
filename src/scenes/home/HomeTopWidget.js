import React, {useEffect, useRef, useState} from "react";
import styles from "../../styles/homeTopWidget.module.css"
import SearchComponent from "../../components/SearchComponent";
import Space from "../../components/Space";
import { useDispatch } from "react-redux";
import { setSeachInputValue } from "../../store/actions";


function HomeTopWidget() {

    const dispatch = useDispatch()

    const onTypeFunction = (typedValue) =>  {
        const topNavigationNav = document.getElementById("sections-nav");
        const searchInput = document.getElementById("headerSearchInput")

        
        if (topNavigationNav && typedValue ) {
            if (searchInput.value !== typedValue) {
                searchInput.value = typedValue
                // searchInput.focus()
            }
            dispatch(setSeachInputValue(typedValue))
            
            topNavigationNav.style.position = "fixed"
            topNavigationNav.style.zIndex = "-1"
        } else {
            if (searchInput.value !== typedValue) {
                searchInput.value = typedValue
                // searchInput.focus()
            }
            dispatch(setSeachInputValue(typedValue))
            topNavigationNav.style.position = "sticky"
            topNavigationNav.style.zIndex = "1"
        }
    }


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
