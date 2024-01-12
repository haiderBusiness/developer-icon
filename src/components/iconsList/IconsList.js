import React, {useState, useEffect, useRef} from "react";
import styles from "../../styles/iconsList.module.css"
import { FixedSizeGrid as Grid} from 'react-window';
import getItemByName from './getItemByName';

import { ReactWindowScroller } from 'react-window-scroller'
import iconSections from "../../asets/iconsSections/iconSections.json"
import fetchIcons from "../../functions/fetchIcons";
import Cell from "./Cell";


import { useDispatch, useSelector } from 'react-redux';
import { setIconObject, setIconsToShow, setSearchedInputValue} from '../../store/actions';
import { BiObjectsHorizontalCenter } from "react-icons/bi";
import calculateColumnCount from "./calculateColumnCount.js";
import IconLoader from "../IconLoader";





const iconSectionsArr = iconSections



const ExampleList = ({divRef}) => {

    const [listAttributes, setListAttributes] = useState({columnCount: 1, divWidth: 200, columnWidth: 160});

  

  // const iconContext = require.context('react-icons/ai', true, /\.js$/);

  // const iconArray = iconContext.keys().map(iconPath => iconContext(iconPath).default);

  // console.log(aiArrayTest())

  const hash1 = window.location.hash
  const hash2 =  hash1 ? hash1.replaceAll("-", " ") : null
  const hash3 = hash2 ? hash2.replaceAll("#", "") : null
  const sectionName = hash2 ? decodeURIComponent(hash3) : null
  const name =  iconSections.some(iconSection => iconSection.name === sectionName) ? sectionName : null


    const shortcutSmallCase = name ? getItemByName(iconSectionsArr,name) : null

    const searchingString = "#/search/#q=" 

    const searching = hash1.includes(searchingString) && hash1.length > searchingString.length

    // console.log("window.location.hash: ")

    const [allIcons, setAllIcons] = useState([]);
    const [shortcut, setShortcut] = useState(shortcutSmallCase ? shortcutSmallCase : !searching ? "ai" : null)

    const { iconsToShow, searchInputValue, activeSection } = useSelector((state) => state.reducer)

    const [showLoading, setShowLoading] = useState(true)


    // let firstRender = true


    /// -> DISPLAY ICONS BASED ON THE ACTIVE SECTION 
    useEffect(() => {

      const shortcutSmallCase = activeSection ? getItemByName(iconSectionsArr,activeSection) : null
      if(shortcut !== shortcutSmallCase) {
        // console.log("activeSection: ", activeSection)
        // console.log("shortcutSmallCase: ", shortcutSmallCase)
        setShortcut(shortcutSmallCase)
      }

    }, [activeSection])

    /// -> SHOW ICONS WHEN HASH CHANGES 

    // useEffect(() => {
    //   // Function to handle hash change
    //   const handleHashChange = () => {


    //     if (!firstRender && window.location.hash) {
    //       // const hash = window.location.hash.replace("#", "")
    //       // const iconSectionName = window.location.hash ? hash : "Ant Design Icons"

    //         const hash1 = window.location.hash
    //         const hash2 =  hash1 ? hash1.replaceAll("-", " ") : null
    //         const hash3 = hash2 ? hash2.replaceAll("#", "") : null
    //         const sectionName = hash2 ? decodeURIComponent(hash3) : null
    //         const name =  iconSections.some(iconSection => iconSection.name === sectionName) ? sectionName : null
           
    //         console.log("beforehand: ", name, ", hash3 beforehand: ", sectionName)

    //       if(name) {
    //         const shortcutSmallCase = getItemByName(iconSectionsArr,name);
    //         //console.log(shortcutSmallCase)
    //         setShortcut(shortcutSmallCase);
    //       }

    //     }

    //   };
  
    //   // Attach event listener for hash change
    //   window.addEventListener('hashchange', handleHashChange);
  
    //   // Clean up the event listener on component unmount
    //   return () => {
    //     window.removeEventListener('hashchange', handleHashChange);
    //   };
    // }, []);

 




    


  /// -> FUNCTION TO RECONFIGURE THE LIST (THE SIZES AND THE NUMBER OF ICONS OF ICONS) SHOWN
  const handleResize = (firstArgument = false, arr = [], returnsSomething = false) => {
    let divName = IconsList.name
    const div = document.getElementById(divName);
      // Replace 'your-div-id' with the actual ID of your div



    if (div) {

      // console.log("")
        const  divWidth = div.offsetWidth;
        const obj = {}

        let calculationObj = {}

        if(arr.length > 0) {
          // console.log("here", arr[0])
          calculationObj = calculateColumnCount(divWidth, arr.length)
        } else 
        if ( allIcons.length > 0) {
          calculationObj = calculateColumnCount(divWidth, allIcons.length)
        } else {
          calculationObj = calculateColumnCount(divWidth)
        }
        

        obj.columnCount = calculationObj.numberOfColums


        if (arr.length < 7 &&  arr.length > 0) {
          obj.divWidth = 160 * obj.columnCount 
          div.style.justifyContent = calculationObj.justifyContent
        }
        else if(allIcons.length < 7 &&  allIcons.length > 0) {
          obj.divWidth = 160 * obj.columnCount 
          div.style.justifyContent = calculationObj.justifyContent
        } else {
          obj.divWidth = divWidth
          div.style.justifyContent = calculationObj.justifyContent
          // obj.divWidth = divWidth
        }
        // obj.divWidth = divWidth
        

        // console.log("allIcons.length: ", allIcons.length)
        // obj.divWidth = divWidth

        
        // obj.columnCount = 2
        obj.columnWidth = 
        (obj.divWidth / 1.032) / obj.columnCount

        if(returnsSomething) {
          return obj
        } else {
          setListAttributes(obj)
        }
        

        
          // if (div.style.width !== "100px") {
          //   div.style.width = "100px"
          // }
        
        // div.style.transitionDuration = '0.2s'
        
    } else {
        console.error(`Div not found in ${this.name} > handleResize function`);
    }
    // Update the divWidth state when the window or div is resized

    // if (divRef.current) {
    //   console.log("here")
    //   setDivWidth(divRef.current.offsetWidth);
    //   };
      
  };


  /// -> CALL ONLY ON FIRST MOUNT 
  useEffect(() => {
    handleResize()
  }, [])


 


    


    /// -> RECONFIGURE THE LIST (THE SIZES AND THE NUMBER OF COLUMNS OF THE ICON'S LIST) SHOWN WHEN WINDOW'S SIZE CHANGES
    useEffect(() => {
        const div = divRef.current
        if (div) {
           
            const  divWidth = div.offsetWidth;
            const obj = {}
  
            let calculationObj = {}
            if (allIcons.length > 0) {
              calculationObj = calculateColumnCount(divWidth, allIcons.length)
            } else {
              calculationObj = calculateColumnCount(divWidth)
            }
            
  
            obj.columnCount = calculationObj.numberOfColums
  
  
            if(allIcons.length < 7 &&  allIcons.length > 0) {
              obj.divWidth = 160 * obj.columnCount 
              div.style.justifyContent = calculationObj.justifyContent
            } else {
              obj.divWidth = divWidth
              div.style.justifyContent = calculationObj.justifyContent
              // obj.divWidth = divWidth
            }
            // obj.divWidth = divWidth
            
  
            // console.log("allIcons.length: ", allIcons.length)
            // obj.divWidth = divWidth
    
            
            // obj.columnCount = 2
            obj.columnWidth = 
            (obj.divWidth / 1.032) / obj.columnCount
            setListAttributes(obj)
        };
    
      // Event listeners for window resize and div resize
      window.addEventListener('resize', handleResize);
      if (div) {
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(divRef.current);
  
        // Cleanup function to disconnect the ResizeObserver when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
          resizeObserver.disconnect();
        };
      }

    }, []); /// -> Empty dependency array ensures that the effect runs only once on mount



    // const selector = useSelector()



    /// -> FETCH ICONS BASED BASED ON THE CURRENT ACTIVE ICON'S SECTION
    useEffect(() => {

      const fetchAiArray = async () => {
        try {
          const icons = await fetchIcons(shortcut);
          setShowLoading(true);
          setAllIcons(icons);
        } catch (error) {
           console.error("Error fetching array:", error);
        } finally {
          console.log("setting to false1")
          setShowLoading(false); // Set loading to false after fetch, whether successful or not
        }
      };

      // console.log("shortcut: ", shortcut, " searchInputValue: ", searchInputValue)
      
      if(shortcut && searchInputValue === "" || shortcut && !searchInputValue) {
        fetchAiArray();
        // console.log("fetching array");
      }
      
    }, [shortcut, searchInputValue]);




    // console.log(IconsList.name)



    /// -> FUNCTION TO FILTER THE ICONS MATCHING THE SEARCHED VALUE IN THE WHOLE ICON'S JSON (all_icons.js)
    const searchIcons = (icons, whenFinished = () => {}) => {

      // try {

      // } catch(error) {
      //   console.log(`error in ${searchIcons} function: `, error.message)
      // } finally {
      //   whenFinished()
      // }
      const searchIcons = icons.filter((item) => {
        if (!!item && !!item.name && item.name !== "" && item.name !== undefined && item.name !== null) {

          // icon name with space before each word starting with capital letter
          const iconWithSpaceName = item.name.replace(/([A-Z])(?![A-Z])/g, ' $1');

          const iconName = iconWithSpaceName.toLocaleLowerCase()
          if (iconName.includes(searchInputValue)) {
            // console.log("item: ", item.name)
            return item
          } else {
            return
          }
        } else {
          return
        }
      })

      if (searchIcons && searchIcons.length > 0) {
        /// -> UPDATES THE DISPLAYIED LIST TO SHOW THE SEARCHED VALUE MATCHING ICONS
        setAllIcons(searchIcons)
      } else {

        /// -> IF THE SEARCHED VALUE DOES NOT MATCH ANYTHING DO: 
        const searchDiv = document.getElementById('headerSearchDiv');
        const searchInput = document.getElementById("searchInput")
        if(searchInput) {
          searchInput.focus()
        }

        console.log("setting to false2")
        setShowLoading(false)
        setAllIcons([])
      }
    }


    // const [loaderAttributes, setLoaderAttributes] = useState({})

    /// ->  DATA FOR THE LOADING UI DISPLAYIED WHEN SEARCHING OR WHEN RELOADING THE PAGE
    const loaderArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]




    
    useEffect(() => {
      // const searchInput = document.getElementById("headerSearchInput")
      // show loading once anything is typed;

      
      // if(searchInputValue !== "" && searchInputValue) {
      //   // setLoaderAttributes(handleResize(false, loaderArray, true))
      //   setShowLoading(true);
      // }
      

       
      if(iconsToShow && iconsToShow.length > 0 && searchInputValue && searchInputValue !== "") {
        setShowLoading(true)
        searchIcons(iconsToShow);
        console.log("setting to false3")
        setShowLoading(false);
      }

    }, [searchInputValue, iconsToShow])

    const [firstRender, setFirstRender] = useState(true)


    useEffect(() => {
      if(!firstRender && searchInputValue) {
        setShowLoading(true)
      } else if (!firstRender) {
        console.log("onFirstMount")
        setShowLoading(false)
      } else {
        setFirstRender(false)
      }
    }, [searchInputValue])

    const dispatch = useDispatch()
    const [selectedItemIndex, setSelectedItemIndex] = useState(null)


    const handleItemClicked = (object) => {
      console.log("event", object);
      const itemIndex = object.itemIndex
      const iconFunction = object.iconFunction
      setSelectedItemIndex(itemIndex);
      // window.location.hash = `${window.location.hash}/icon_${itemIndex}=${iconFunction?.name}`;
      showModal()
      dispatch(setIconObject(object));
    }


    



    const showModal = () => {
      const div = document.getElementById("iconModal")
      if (div) {
          div.style.zIndex = "5"
      }
    }




    // firstRender = false





    // useEffect(() => {
    //   if(showLoading) {
    //     const body = document.body
    //     body.style.overflowY = "hidden"
    //   } else {
    //     const body = document.body
    //     body.style.overflowY = "auto"
    //   }
      

    //   return () => {
    //     divs.forEach((div) => {
    //       div.style.overflow = '';
    //     });
    //   };
    // }, [showLoading])



    


    return(
      // <div></div>


    <ReactWindowScroller isGrid>
    {({ ref, outerRef, style, onScroll }) => (


      // showLoading && (
      //   <div className={styles.loaderDiv}>
      //     <IconLoader/>
      //   </div>
      // )

        showLoading ? (
          // <div className={styles.loaderDiv}>
          //   <IconLoader/>
          // </div>
          <div 
          // style={{backgroundColor: "red", }}
          >

          
          <IconLoader 
          style={style}
          // ref={ref}
          outerRef={outerRef} 
          className={styles.iconLoader}
          loaderArray={loaderArray} listAttributes={listAttributes}/>
          </div>
        )
       : 
       allIcons.length > 0 ? (
      <Grid
        style={style}
        ref={ref}
        outerRef={outerRef}
        className={styles.list}
        columnCount={listAttributes.columnCount}
        // columnCount={2}
        // rowCount={allIcons.length / listAttributes.columnCount}
        rowCount={Math.ceil(allIcons.length / listAttributes.columnCount)}
        
        // rowCount={2}
        columnWidth={listAttributes.columnWidth}
        rowHeight={150}
        height={window.innerHeight}
        // height={200}
        width={window.innerWidth}
        // width={listAttributes.divWidth}
        // width={listAttributes.divWidth}
        // onScroll={onScroll}
      >
        {({ columnIndex, rowIndex, style }) => (
          <Cell
            onClick={(objectReceived) => {handleItemClicked(objectReceived)}}
            columnIndex={columnIndex}
            rowIndex={rowIndex}
            style={style}
            customParam={listAttributes}
            allIcons={allIcons}
            isSelectedItemIndex={(rowIndex * listAttributes.columnCount + columnIndex) === selectedItemIndex}
            // dispath={dispatch}
          />
        )}
      </Grid>
      ) :
      (
        <NoSearchResults searchInputValue={searchInputValue}/>
      )
    )}
    </ReactWindowScroller>

    )
};





const NoSearchResults = ({searchInputValue}) => {

  const dispatch = useDispatch()

  const onClick = () => {

    window.location.hash = "#Ant-Design-Icons"
    dispatch(setSearchedInputValue(null));
  }

  return(
    <>
      <div className={styles.emptyTitle}>
        No results for: "{searchInputValue}"
      </div>
      <div className={styles.emptySupTitle}>
        Not finding an icon that you are sure of its existance here ? <a href="https://ionic.io">File an issue</a> We'll fix it as soon as possible.
      </div>
      <div onClick={() => onClick()} style={{width:"fit-content", paddingInline: "10px", margin: "15px auto"}} className={"defaultButton"}>Return to icons</div>
    </>
  )
}




 

function IconsList({listWidth, style}) {

    const divRef = useRef(null);
    return(
        <div id={IconsList.name} ref={divRef} className={styles.mainDiv} 
        // style={{...style, backgroundColor: "red" }}
        >
          <div className={styles.listMainDiv}>
          {ExampleList({divRef})}
          </div>
        </div>
    )
}

export default IconsList;




