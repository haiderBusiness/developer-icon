
import React, {useState, useEffect} from "react"
import styles from "../../styles/header.module.css"
//  import LogoSvg from "../../asets/logo/logo.svg"
import Logo from "../../asets/logo/Logo"
import SearchComponent from "../SearchComponent"
import { useDispatch } from "react-redux";
import { setSearchedInputValue } from "../../store/actions";
import onTypeFunction from "../../functions/onTypeFunction";

import { CiLight, CiDark } from "react-icons/ci";

import useLocalStorage from 'use-local-storage'



function onFirstButtonClick() {

}

function onSecondButtonClick() {
    
}

function onThirdButtonClick() {
    
}




const handleScroll = () => {
    const searchDiv = document.getElementById('headerSearchDiv');
    const targetDiv =  document.getElementById("searchDivContainer")
    const headerSearchInput = document.getElementById("headerSearchInput")
    
    

  //   if (targetDiv) {
  //     const targetRect = targetDiv.getBoundingClientRect();
  //     const isVisible = targetRect.top < window.innerHeight && targetRect.bottom >= 0;

  //     if (isVisible) {
  //         alert("true")
  //     }
  //   }

      const offsetTop = targetDiv.offsetTop;
      const scrollTop = window.scrollY;
      if (searchDiv) {
          searchDiv.style.transitionDuration = '0.2s'
      }

    //   headerSearchInput.readOnly = true
      if (scrollTop > (offsetTop + targetDiv.offsetHeight * 4.4) ) {
          //alert("offsetTop: ", offsetTop + targetDiv.height)
          if (searchDiv) 
          searchDiv.style.opacity = "1"
          searchDiv.style.pointerEvents = "auto"
          searchDiv.style.cursor = "text"
        //   headerSearchInput.readOnly = true
          headerSearchInput.disabled = false;
      } else {
          if (searchDiv) 
          searchDiv.style.opacity = "0"
          searchDiv.style.pointerEvents = "none"
          headerSearchInput.disabled = true;
          searchDiv.style.cursor = "default"
        //   headerSearchInput.readOnly = true

      }
  };






    

export default function Header({}) {

    const thisSearchDivContainer = "headerSearchDiv"

    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    

    let defaultDarkMode = false
    const div = document.getElementById("app")
    if(div) {
        // console.log("theme: ", theme)
        div.dataset.theme = theme
        if (div.dataset.theme === "dark") {

            defaultDarkMode = true
        } else {
           defaultDarkMode = false
        }
    }
    const [darkMode, setDarkMode] = useState(defaultDarkMode);


 

    function handleResize() {
        
        if (window.innerWidth <= 620) {
            if (showHamburgerMenu === false) {
                setShowHamburgerMenu(true)
            }
        } else {
            if (showHamburgerMenu === true) {
                setShowHamburgerMenu(false)
                showRightSideBar(false)
            }
        }
        
      }


    useEffect(() => {
        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener("resize", handleResize);
        };

    }, [showHamburgerMenu]);


    const handleModeClick = () => {
        const div = document.getElementById("app")
        if(div) {
            if (div.dataset.theme === "dark") {
                div.dataset.theme = "light"
                setTheme("light")
                setDarkMode(false)
            } else {
                div.dataset.theme = "dark"
                setTheme("dark")
                setDarkMode(true)
            }
            
        }
    }




    const dispatch = useDispatch()

    // const onTypeFunction = (typedValue) =>  {
    //     const searchResultsDiv = document.getElementById("searchResultsDiv");
    //     const searchInput = document.getElementById("searchInput")
    //     const headerSearchInput = document.getElementById("headerSearchInput")
    //     if (searchResultsDiv && typedValue ) {
    //         if (searchInput.value !== typedValue) {
    //             searchInput.value = typedValue
    //             // searchInput.focus()
    //         }

    //         if (headerSearchInput !== typedValue) {
    //             headerSearchInput.value = typedValue
    //         }

    //         // window.location.hash = `search/#q=${typedValue}`;
    //         if(typedValue !== "" && !window.location.hash.includes(typedValue)) {
    //             window.location.hash = `iconssearch/#q=${typedValue}`;
    //         }
           
    //         dispatch(setSearchedInputValue(typedValue))
    //         searchResultsDiv.style.zIndex = "5"
    //     } else {
    //         if (searchInput.value !== typedValue) {
    //             searchInput.value = typedValue
    //             // searchInput.focus()
    //         } 
    //         if (headerSearchInput !== typedValue) {
    //             headerSearchInput.value = typedValue
    //         }
    //         if(typedValue !== "" && !window.location.hash.includes(typedValue)) {
    //             window.location.hash = `search/#q=${typedValue}`;
    //         }
    //         // window.location.hash = `search/#q=${typedValue}`;
    //         dispatch(setSearchedInputValue(typedValue))
    //         searchResultsDiv.style.zIndex = "-1"
    //     }
    // }


    return(
        <div className={styles.header}>
            <div className={styles.mainDiv}>

                    <div className={styles.imageDiv}>
                        {/* <img height={"75px"} width={"130"} src={LogoSvg} />  */}
                        <Logo height={"80"} width={"130"} developer_text_color={"var(--text-primary)"} icon_text_color={"var(--special)"} icon_color={"var(--special)"} />
                    </div>


                    <SearchComponent cssStyles={styles} id={thisSearchDivContainer} onType={(typedValue) => onTypeFunction(typedValue)} inputId={"headerSearchInput"}/>

                    {!showHamburgerMenu ?
                    <div  className={styles.buttons}>
                        <div className={styles.button}  onClick={onFirstButtonClick}>
                            Icons
                        </div>

                        <div className={styles.button} onClick={onSecondButtonClick}>
                            second
                        </div>

                        <div className={styles.button}  onClick={onThirdButtonClick}>
                            third
                        </div>

                        <div onClick={() => handleModeClick()} className={styles.darkModeDiv}>
                           {darkMode ? <CiLight className={"icon dark-mode"} size={30}/> : <CiDark className="icon dark-mode" size={30} />} 
                        </div>
                    </div>
                    : 
                    <div>
                        <HamburgerMenu/>
                    </div>
                    }


            </div>
        </div>
    )
}







const showRightSideBar = (show) => {
    const div = document.getElementById("RightSideBar")
    console.log("here")

    if (div) {
        if(show) {
             // div.style.transform s
             div.style.transform = "translateX(0)"
        }
        else {
            div.style.transform = "translateX(150%)"
        }
    } 
}

const HamburgerMenu = ({}) =>  {

    const [show, setShow] = useState(false)

    useEffect(() => {
        if (show) {
            showRightSideBar(true)
        } else {
            showRightSideBar(false)
        }
    }, [show])


    return(
        <>
            <input className={styles.checkbox} onChange={() => setShow(it => !it)} type="checkbox" name="" id="" />
            <div className={styles.hamburgerLines}>
              <span className={styles.line1}></span>
              <span className={styles.line2}></span>
              <span className={styles.line3}></span>
            </div>  
        </> 
    )
}