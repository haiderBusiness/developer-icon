import React, {useState, useEffect, useRef} from "react";
import styles from "../../styles/iconsList.module.css"
import { FixedSizeGrid as Grid} from 'react-window';
import getItemByName from './getItemByName';

import { ReactWindowScroller } from 'react-window-scroller'
import iconSections from "../../asets/iconsSections/iconSections.json"
import fetchIcons from "../../functions/fetchIcons";
import Cell from "./Cell";

import { useDispatch, useSelector } from 'react-redux';
 


function calculateColumnCount(divWidth) {
  
  if (divWidth >= 1210) {
    return 7; 
  } else if (divWidth >= 1070) {
    return 6;
  } else if (divWidth >= 930) {
    return 5;
  } if (divWidth >= 790) {
    return 4;
  } else if (divWidth >= 650) {
    return 3;
  } else if (divWidth >= 550) {
    return 3;
  } else if (divWidth >= 400) {
    return 2;
  } else if(divWidth >= 260) {
    return 1;
  } else {
    return 1;
  } 

  }

const iconSectionsArr = iconSections


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


  



    // useEffect(() => {
    //   // const aiArray = () => {
    //   //   // Note: Use import().then() to avoid the need for async/await
    //   //   const importingName = `react-icons/ai`
    //   //   return import(importingName).then((aiIconsModule) => {
    //   //     // Assuming the individual icons are properties of the module object
    //   //     const aiIconsArray = Object.values(aiIconsModule);
    //   //     return aiIconsArray;
    //   //   });
    //   // };
    
    //   // aiArray().then((resolvedArray) => {
    //   //   setAllIcons(resolvedArray)
    //   // });

    //   // const importingName = `react-icons/${shortcut}`;
    //   // import(importingName).then((iconsModule) => {
    //   //   const iconsArray = Object.values(iconsModule);
    //   //   setAllIcons(iconsArray);
    //   // });


    //   // const importComponent = async () => {
    //   //   const importingName = `react-icons/${shortcut}`
    //   //   const aiIconsModule = React.lazy(() => import(importingName));
    //   //   // const AnotherComponent = module;
    //   //   const aiIconsArray = Object.values(aiIconsModule)
    //   //   console.log(aiIconsArray)
    //   //   // const iconsArray = Object.values(aiIconsArray);

    //   //   setAllIcons(aiIconsArray)
    //   // };
    //   // importComponent()

    //     const fetchAiArray = async () => {
    //     try {
    //       const icons = await fetchIcons();
    //       // setAllIcons(icons)

    //       setTimeout(function(){setAllIcons(icons)}, 10000)
          
    //       console.log("here")
    //     // const icons = await all_icons();
    //     // setAllIcons(...allIcons, icons);
    //     // console.log("aiArray state updated:", allIcons);
    //     } catch (error) {
    //        console.error("Error fetching array:", error);
    //     }
    //   };
      
    //   fetchAiArray()
    // }, [shortcut])


    
    
    // setAllIcons(aiArray)

    // useEffect(() => {

      // setAllIcons(aiArray)
      // const fetchAiArray = async () => {
      //   try {
        //// const icons = await aiArray();
        // const icons = await all_icons();
        // setAllIcons(...allIcons, icons);
        // setAllIcons(...allIcons, icons);
        // console.log("aiArray state updated:", allIcons);
        // console.log("icons before: ")
        // const icons = new Promise(resolve => {
        //     const icons = require("../asets/all_icons").all_icons
        //     resolve(icons); // Simulating a delay of 2 seconds
        // })
        // if("haider" === "hamid") {
        //   const all = require("../asets/all_icons").all_icons
        // }

        // const icons = await all()
        // console.log("icons: ", icons)
        // setAllIcons(icons)
        // } catch (error) {
          // console.error("Error fetching aiArray:", error);
        // }
      // };
  
      // fetchAiArray();
    // }, []);


 

    useEffect(() => {
      const fetchAiArray = async () => {
        try {
          const icons = await fetchIcons(shortcut)
          setAllIcons(icons)
        } catch (error) {
           console.error("Error fetching array:", error);
        }
      };
      
      fetchAiArray();
    }, [shortcut]);



    useEffect(() => {
        const handleResize = () => {
            let divName = IconsList.name
            const div = document.getElementById(divName);
             // Replace 'your-div-id' with the actual ID of your div

            if (div) {
                const divWidth = div.offsetWidth;
                const obj = {}
                obj.divWidth = divWidth
                obj.columnCount = calculateColumnCount(divWidth)

                obj.columnWidth = (divWidth / 1.032) / obj.columnCount
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


        if (divRef.current) {
        const divWidth = divRef.current.offsetWidth;
        const obj = {}
        obj.divWidth = divWidth
        obj.columnCount = calculateColumnCount(divWidth)
        obj.columnWidth = (divWidth / 1.032) / obj.columnCount
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
  

   


    useEffect(() => {
      console.log("test test")
    }, ["haider"])




    const dispatch = useDispatch()
    const [selectedItemIndex, setSelectedItemIndex] = useState(null)


    const handleItemClicked = (object) => {
      console.log("event", object)
      setSelectedItemIndex(object.itemIndex)
    }



    firstRender = false

    return(

    <ReactWindowScroller isGrid>
    {({ ref, outerRef, style, onScroll }) => (
       allIcons.length > 0 && (
      <Grid
        style={style}
        ref={ref}
        outerRef={outerRef}
        className={styles.list}
        columnCount={listAttributes.columnCount}
        rowCount={allIcons.length / listAttributes.columnCount}
        columnWidth={listAttributes.columnWidth}
        rowHeight={150}
        height={window.innerHeight}
        width={window.innerWidth}
        // width={listAttributes.divWidth}
        onScroll={onScroll}

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
      </Grid>)
    )}
    </ReactWindowScroller>

    )
};







 

function IconsList({listWidth}) {

    const divRef = useRef(null);
    return(
        <div id={IconsList.name} ref={divRef} className={styles.mainDiv}>
          <div className={styles.listMainDiv}>
          {ExampleList({divRef})}
          </div>
        </div>
    )
}

export default IconsList;




