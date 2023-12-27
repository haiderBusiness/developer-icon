import React, {useState, useEffect, useRef} from "react";
import styles from "../../styles/iconsList.module.css"
import { FixedSizeGrid as Grid} from 'react-window';
import getItemByName from './getItemByName';

import { ReactWindowScroller } from 'react-window-scroller'
import iconSections from "../../asets/iconsSections/iconSections.json"
import fetchIcons from "../../functions/fetchIcons";
import Cell from "./Cell";


import { useDispatch, useSelector } from 'react-redux';
import { setIconFunction, setIconsToShow } from '../../store/actions';
import { BiObjectsHorizontalCenter } from "react-icons/bi";
import calculateColumnCount from "./calculateColumnCount.js";




const iconSectionsArr = iconSections


let currentIcons = []

let savedSearchInputValue = ""

const ExampleList = ({divRef}) => {

    const [listAttributes, setListAttributes] = useState({columnCount: 1, divWidth: 200, columnWidth: 90});

  

  // const iconContext = require.context('react-icons/ai', true, /\.js$/);

  // const iconArray = iconContext.keys().map(iconPath => iconContext(iconPath).default);

  // console.log(aiArrayTest())

    const hash = window.location.hash.replace("#", "")
    const iconSectionName = window.location.hash ? hash : "Ant Design Icons"

    const shortcutSmallCase = getItemByName(iconSectionsArr,iconSectionName)

    // console.log("window.location.hash: ")

    const [allIcons, setAllIcons] = useState([]);
    const [shortcut, setShortcut] = useState(shortcutSmallCase)

    let firstRender = true

    useEffect(() => {
      // Function to handle hash change
      const handleHashChange = () => {


        if (!firstRender) {
          const hash = window.location.hash.replace("#", "")
          const iconSectionName = window.location.hash ? hash : "Ant Design Icons"

          const shortcutSmallCase = getItemByName(iconSectionsArr,iconSectionName)

          // console.log(shortcutSmallCase)
          setShortcut(shortcutSmallCase);
        }

      };
  
      // Attach event listener for hash change
      window.addEventListener('hashchange', handleHashChange);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }, []);

 






    const handleResize = () => {
      let divName = IconsList.name
      const div = document.getElementById(divName);
       // Replace 'your-div-id' with the actual ID of your div

      if (div) {

        console.log("")
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

    


    useEffect(() => {

        if (divRef.current) {
          const div = divRef.current
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
      if (divRef.current) {
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(divRef.current);
  
        // Cleanup function to disconnect the ResizeObserver when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
          resizeObserver.disconnect();
        };
      }

    }, []); // Empty dependency array ensures that the effect runs only once on mount



    // const selector = useSelector()

    const { iconsToShow, searchInputValue } = useSelector((state) => state.reducer)


    useEffect(() => {
      const fetchAiArray = async () => {
        try {
          const icons = await fetchIcons(shortcut);
          setAllIcons(icons);
        } catch (error) {
           console.error("Error fetching array:", error);
        }
      };
      
      if(searchInputValue === "" || !searchInputValue) {
        fetchAiArray();
      }
      
    }, [shortcut, searchInputValue]);


    useEffect(() => {
      handleResize()
    }, [])


    // console.log(IconsList.name)

    useEffect(() => {
      // const searchInput = document.getElementById("headerSearchInput")
      if(iconsToShow && iconsToShow.length > 0 && searchInputValue && searchInputValue !== "") {

      
        const searchIcons = iconsToShow.filter((item) => {
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
          console.log("searchIcons: ", searchIcons[0])
          setAllIcons(searchIcons)
        } else {
          setAllIcons([])
        }
      }

    }, [searchInputValue, iconsToShow])

    const dispatch = useDispatch()
    const [selectedItemIndex, setSelectedItemIndex] = useState(null)


    const handleItemClicked = (object) => {
      console.log("event", object);
      setSelectedItemIndex(object.itemIndex);
      dispatch(setIconFunction(object.iconFunction));
    }



    firstRender = false





    return(
      // <div></div>
    <ReactWindowScroller isGrid>
    {({ ref, outerRef, style, onScroll }) => (
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
      
      (<>
      <div className={styles.emptyTitle}>
        No results for "{searchInputValue}"
      </div>
      <div className={styles.emptySupTitle}>
        Not finding an icon that you are sure of its existance within ? <a href="https://ionic.io">File an issue</a> and suggest a new icon.
      </div>
      </>
      )
    )}
    </ReactWindowScroller>

    )
};







 

function IconsList({listWidth, style}) {

    const divRef = useRef(null);
    return(
        <div id={IconsList.name} ref={divRef} className={styles.mainDiv} 
        // style={{...style, width: `${window.innerWidth}px` }}
        >
          <div className={styles.listMainDiv}>
          {ExampleList({divRef})}
          </div>
        </div>
    )
}

export default IconsList;




