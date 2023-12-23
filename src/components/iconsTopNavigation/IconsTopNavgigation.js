import React, {useState} from 'react';

import styles from "../../styles/iconsTopNavigation.module.css"
import iconSections from "../../asets/iconsSections/iconSections.json"

const IconsTopNavgigation = () => {


  const hash = window.location.hash.replace("#", "")
  const hashNoDashes = hash.replaceAll("-", " ")
  const iconSectionName = hashNoDashes ? hashNoDashes : "Ant Design Icons"

  const [selectedSection, setSelectedSection] = useState(iconSectionName)

  function onClick(name) {
    // alert("clicked") 
      const specificPoint = document.getElementById("searchDivContainer"); // Replace with your element ID
      const nav = document.getElementById("sections-nav")

      setSelectedSection(name)
      if (specificPoint) {
        setTimeout(function() {
          // specificPoint.scrollIntoView({
          //   behavior: 'smooth', // Optional: Use smooth scrolling
          //   block: 'start'
          // });
          window.scrollTo(0, (specificPoint.offsetTop + 40));

        }, 10)
      }
  
  }






  return (
    <nav id={"sections-nav"} className={styles.nav}>


      <div className={styles.container}>
        <div className={styles.links}>
            {iconSections.map((obj, index) => {
              const name = obj.name
                const href = name.replaceAll(" ", "-")
                const key = obj.shortcut
                const lastKey = key.slice(1)

                console.log("selectedSection: ", selectedSection, name)
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
                    <a onClick={() => onClick(name)} id={href} style={style} className={styles.link} data-custom={customKey} key={customKey}  href={"#" + href}>{name}</a>
                )
            })}
        </div>
      </div>
      
    </nav>
  );
};

export default IconsTopNavgigation;
