import React, {useRef, useState} from "react";
import styles from "../../styles/homeTopWidget.module.css"
import SearchComponent from "../../components/SearchComponent";
import Space from "../../components/Space";


function HomeTopWidget() {

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

            <SearchComponent/>

            <Space height={20}/>
            
            {/* <IconsList/> */}

           
        </div>

  );
}

export default HomeTopWidget;
