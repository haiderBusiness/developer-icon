import React, {useEffect, useState} from 'react';

import styles from "../../styles/iconsTopNavigation.module.css"
import iconSections from "../../asets/iconsSections/iconSections.json"

import { useDispatch, useSelector } from 'react-redux';
import { setActiveSection } from '../../store/actions';

const IconsTopNavgigation = () => {

  // const hash =  !window.location.hash.includes("search") && !window.location.hash.includes("=") ? window.location.hash.replace("#", "") : null

  // const hash = window.location.hash
  // const hashNoDashes =  hash ? hash.replaceAll("-", " ") : null
  // const name = iconSections.some(iconSection => iconSection.name === hashNoDashes) ? hashNoDashes : null
  
  // const iconSectionName = hashNoDashes ? hashNoDashes : "Ant Design Icons"
  

  const [selectedSection, setSelectedSection] = useState("Ant Design Icons")

  const dispatch = useDispatch()

  function onClick(name, activeItemId) {

    try {
      // alert("clicked") 
      const specificPoint = document.getElementById("searchDivContainer"); // Replace with your element ID
      // const nav = document.getElementById("sections-nav")

      const scrollContainer = document.getElementById("scrollContainer")
      const activeItem = document.getElementById(activeItemId)
      
      // console.log("scrollContainer: ", scrollContainer)

      const scrollRect = scrollContainer.getBoundingClientRect();
      const activeRect = activeItem.getBoundingClientRect();
      
      setSelectedSection(name)
      if (specificPoint) {
        setTimeout(function() {
          // specificPoint.scrollIntoView({
          //   behavior: 'smooth', // Optional: Use smooth scrolling
          //   block: 'start'
          // });


          window.scrollTo(0, (specificPoint.offsetTop + 40));

          // nav.scrollTo(1000, 0)
          // nav.scrollTo({ left: 1000, behavior: "smooth" };

        }, 5)

        setTimeout(function() {
          const scrollLeftPosition = activeRect.left - scrollRect.left - (scrollRect.width / 2) + (activeRect.width / 2)
          scrollContainer.scrollLeft += scrollLeftPosition;

        }, 10)
      }
    } catch {
      throw console.error("Error: here is window.location.hash: ", window.location.hash, " Error details: ", Error);
    }
    
  
  }






  


  useEffect(() => {
    // Function to handle hash change

    if (window.location.hash) {

      const hash1 = window.location.hash
      const hash2 =  hash1 ? hash1.replaceAll("-", " ") : null
      const hash3 = hash2 ? hash2.replaceAll("#", "") : null
      const sectionName = hash2 ? hash3 : null
      const name =  iconSections.some(iconSection => iconSection.name === sectionName) ? sectionName : null
     
      // console.log("beforehand: ", name, ", hash3 beforehand: ", sectionName)
      
      const searchResultsDiv = document.getElementById("searchResultsDiv")

      const searchString = "#search/#q="


      

      

    if(!name && hash1 && hash1 && !hash1.includes(searchString) && hash1.includes("/icon")) {

        // Split the string using "/icon" as the separator
        const parts = hash1.split('/icon');

        // The first part of the array will contain the string before "/icon"
        const stringBeforeIcon = parts[0];

        // Extract the substring between "icon_" and "="
        const iconValue = hash1.match(/icon_(\d+)=/);

        // Check if a match is found and extract the captured value
        const numberValue = iconValue ? parseInt(iconValue[1], 10) : null;


        const hash2 =  stringBeforeIcon ? stringBeforeIcon.replaceAll("-", " ") : null
        const hash3 = hash2 ? hash2.replaceAll("#", "") : null
        const sectionName = hash2 ? hash3 : null
        const name =  iconSections.some(iconSection => iconSection.name === sectionName) ? sectionName : null

        if(name) {
          if(searchResultsDiv) { 
            searchResultsDiv.style.zIndex = "-1"
          }
          dispatch(setActiveSection(name))
          onClick(name, name)
        } else {
          if(searchResultsDiv) {
            searchResultsDiv.style.zIndex = "-1"
            }
        }

        console.log("stringBeforeIcon", stringBeforeIcon)

        

        

      } else if(!name && hash1 && hash1.includes(searchString) && hash1.length > searchString.length) {
        if(searchResultsDiv) {
          searchResultsDiv.style.zIndex = "5"
          }
      }
      else if(!name && hash1 && hash1 && !hash1.includes(searchString)) {
        if(searchResultsDiv) { 
          searchResultsDiv.style.zIndex = "-1"
        }
        // window.location.hash = "#/Ant-Design-Icons"
      } else if(name) {
        if(searchResultsDiv) { 
          searchResultsDiv.style.zIndex = "-1"
        }
        dispatch(setActiveSection(name))
        onClick(name, name)
      }  else {
        if(searchResultsDiv) {
        searchResultsDiv.style.zIndex = "-1"
        }
        // window.location.hash = "#/Ant-Design-Icons"
      }
      
    }
        
  }, []);


  useEffect(() => {

    // if(undefiendUrl = "") {

    // }
  }, [])




  useEffect(() => {
    // Function to handle hash change
    const handleHashChange = () => {



      const hash1 = window.location.hash
      const hash2 =  hash1 ? hash1.replaceAll("-", " ") : null
      const hash3 = hash2 ? hash2.replaceAll("#", "") : null
      const sectionName = hash2 ? hash3 : null
      const name =  iconSections.some(iconSection => iconSection.name === sectionName) ? sectionName : null
     
      // console.log("beforehand: ", name, ", hash3 beforehand: ", sectionName)
      
      const searchResultsDiv = document.getElementById("searchResultsDiv")

      const searchString = "#search/#q="


      if(!name && hash1 && hash1.includes(searchString) && hash1.length > searchString.length) {
        if(searchResultsDiv) {
          searchResultsDiv.style.zIndex = "5"
          }
      }
      else if(!name && hash1 && hash1 && !hash1.includes(searchString)) {
        if(searchResultsDiv) { 
          searchResultsDiv.style.zIndex = "-1"
        }
        // window.location.hash = "#/Ant-Design-Icons"
      } else if(name) {
        if(searchResultsDiv) { 
          searchResultsDiv.style.zIndex = "-1"
        }
        dispatch(setActiveSection(name))
        onClick(name, name)
      } else {
        if(searchResultsDiv) {
        searchResultsDiv.style.zIndex = "-1"
        }
        // window.location.hash = "#/Ant-Design-Icons"
      }
      


      
    };


    // Attach event listener for hash change
    window.addEventListener('hashchange', handleHashChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);


  








  return (
    <nav id={"sections-nav"} className={styles.nav}>

    <div 
    id="searchResultsDiv"
    className={styles.searchResultsDiv}
    >
      Search Results
    </div>

      <div id={"scrollContainer"} className={styles.container}>
        <div className={styles.links}>
            {iconSections.map((obj, index) => {
                const name = obj.name
                const href = name.replaceAll(" ", "-")
                const key = obj.shortcut 
                const lastKey = key.slice(1)

                // console.log("selectedSection: ", selectedSection, name)
                const style = {
                  backgroundColor: selectedSection === name ? "#EAF3F8" : null,
                  color: selectedSection === name ? "#0096DF" : null,
                  marginLeft: index === 0 ? "0px" : "7.5px", 
                  marginRight: (iconSections.length - 1) === index ? "0px" : "7.5px"
                }
                

                let customKey = ""
                if(key.length > 2) {
                  const firstKey = key.slice(0, -2);
                  customKey = firstKey + "hathahu" + lastKey
                } else {
                  const firstKey = key.slice(0, -1);
                  customKey = firstKey + "hathahu" + lastKey
                }
               
                // console.log(name, lastKey)
                return(
                    <a onClick={() => onClick(name, name)} 
                    // id={href} 
                    id={name} 
                    style={style} className={styles.link} data-custom={customKey} key={customKey}  href={"#" + href}>{name}</a>
                )
            })}
        </div>
      </div>
      
    </nav>
  );
};

export default IconsTopNavgigation;
