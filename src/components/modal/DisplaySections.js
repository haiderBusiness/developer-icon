import { useEffect, useState } from "react"
import styles from "../../styles/modal.module.css"
import AndroidFrontage from "./frontages/AndroidFrontage"
import IOSFrontage from "./frontages/IOSFrontage"
import WebFrontage from "./frontages/WebFrontage"

export default function DisplaySections({}) {

    const [activeSection,setActiveSection] = useState("Web")


 

    const onClick = (section) => {
        setActiveSection(section)
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
        
        {activeSection === "IOS" ? <div style={{marginTop: "10px"}}> <IOSFrontage/> </div>  : activeSection === "Android" ? <div style={{marginTop: "10px"}}> <AndroidFrontage/> </div> : activeSection === "Web" ? <div style={{marginTop: "10px"}}> <WebFrontage/> </div> :  null}

        </div>
    )
}