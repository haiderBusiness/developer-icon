import { useEffect, useState } from "react"
import styles from "../../styles/modal.module.css"
import AndroidFrontage from "./frontages/AndroidFrontage"
import IOSFrontage from "./frontages/IOSFrontage"
import WebFrontage from "./frontages/WebFrontage"

export default function DisplaySections({onSectionChange}) {

    const [activeSection,setActiveSection] = useState("Web")


 

    const onClick = (section) => {
        setActiveSection(section)
        onSectionChange(section)
    }

    const sections = ["Web", "Android", "IOS"]


    const style = {

    }

    return(
        <div className={styles.displaySections}>

        <div  className={styles.sections}>
            {sections.map((item, index) => {
                return(
                    <div key={index} style={{
                        borderBottom: activeSection === item ? "2px solid #0096df" : "2px solid rgba(0,0,0,0.1)",
                        // backgroundColor: activeSection === item ? "rgba(0,0,0,0.1)" : ""
                        }} 
                        onClick={ () => onClick(item)} id={item} className={styles.section}>
                    {item}
                    </div>
                )
            })}
        </div>
        
        {/* {activeSection === "IOS" ?  <div><IOSFrontage/></div>  : activeSection === "Android" ?  <AndroidFrontage/> : activeSection === "Web" ?  <WebFrontage/> :  null} */}
        {/* {activeSection === "IOS" ?  <IOSFrontage/>  : activeSection === "Android" ?  <AndroidFrontage/> : activeSection === "Web" ?  <WebFrontage/> :  null} */}

        </div>
    )
}