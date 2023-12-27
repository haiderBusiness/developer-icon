
import React, {useState, useEffect} from "react"
import styles from "../../styles/header.module.css"
import Logo from "../../asets/developer-icon-high-resolution-logo-transparent.svg"
import SearchComponent from "../SearchComponent"
import { useDispatch } from "react-redux";
import { setSeachInputValue } from "../../store/actions";



function onFirstButtonClick() {

}

function onSecondButtonClick() {
    
}

function onThirdButtonClick() {
    
}




const handleScroll = () => {
    const searchDiv = document.getElementById('thisSearchDivContainer');
    const targetDiv =  document.getElementById("searchDivContainer")

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

      if (scrollTop > offsetTop + targetDiv.offsetHeight ) {
          //alert("offsetTop: ", offsetTop + targetDiv.height)
          if (searchDiv) 
          searchDiv.style.opacity = "1"
          searchDiv.style.pointerEvents = "auto"
      } else {
          if (searchDiv) 
          searchDiv.style.opacity = "0"
          searchDiv.style.pointerEvents = "none"
      }
  };






    

export default function Header({}) {

    const thisSearchDivContainer = "thisSearchDivContainer"

    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)

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




    const dispatch = useDispatch()

    const onTypeFunction = (typedValue) =>  {
        const searchResultsDiv = document.getElementById("searchResultsDiv");
        const searchInput = document.getElementById("searchInput")
        if (searchResultsDiv && typedValue ) {
            if (searchInput.value !== typedValue) {
                searchInput.value = typedValue
                // searchInput.focus()
            }
            dispatch(setSeachInputValue(typedValue))
            searchResultsDiv.style.zIndex = "5"
        } else {
            if (searchInput.value !== typedValue) {
                searchInput.value = typedValue
                // searchInput.focus()
            }
            dispatch(setSeachInputValue(typedValue))
            searchResultsDiv.style.zIndex = "-1"
        }
    }


    return(
        <div className={styles.header}>
            <div className={styles.mainDiv}>

                    <div className={styles.imageDiv}>
                        <img height={"75px"} width={"130"} src={Logo} /> 
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