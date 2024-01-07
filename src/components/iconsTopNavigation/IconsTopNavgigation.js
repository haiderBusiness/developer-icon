import React, {useEffect, useState} from 'react';

import styles from "../../styles/iconsTopNavigation.module.css"
import iconSections from "../../asets/iconsSections/iconSections.json"

const IconsTopNavgigation = () => {

  const hash =  !window.location.hash.includes("search") ? window.location.hash.replace("#", "") : null
  const hashNoDashes =  hash ? hash.replaceAll("-", " ") : null
  const iconSectionName = hashNoDashes ? hashNoDashes : !window.location.hash.includes("search") ? "Ant Design Icons" : null
  

  const [selectedSection, setSelectedSection] = useState(iconSectionName)

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

    if (hash) {
      const hash = window.location.hash.replace("#", "")
      const iconSectionName = window.location.hash ? hash : "Ant Design Icons"
      const name = iconSectionName.replaceAll("-", " ")
      onClick(name, name)
    }
        
  }, []);




  useEffect(() => {
    // Function to handle hash change
    const handleHashChange = () => {



      const hash =  !window.location.hash.includes("search") ? window.location.hash.replace("#", "") : null
      const hashNoDashes =  hash ? hash.replaceAll("-", " ") : null
      const name = hashNoDashes ? hashNoDashes : !window.location.hash.includes("search") ? "Ant Design Icons" : null


      if(hash) {
        onClick(name, name)
      } else {
        // setSelectedSection(null)
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
