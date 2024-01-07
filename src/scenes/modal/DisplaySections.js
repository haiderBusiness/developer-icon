import { useEffect, useState } from "react"
import styles from "../../styles/modal.module.css"
import IOSFrontage from "./frontages/IOSFrontage"

export default function DisplaySections({}) {

    const [activeSection,setActiveSection] = useState("web")


 

    const onClick = (section) => {
        setActiveSection(section)
    }

    const sections = ["Web", "Android", "IOS", "React"]


    const style = {

    }

    return(
        <div className={styles.displaySections}>

        <div  className={styles.sections}>
            {sections.map((item, index) => {
                return(
                    <div style={{
                        borderBottom: activeSection === item ? "2px solid #0096df" : "2px solid rgba(0,0,0,0.1)",
                        backgroundColor: activeSection === item ? "rgba(0,0,0,0.1)" : ""
                        }} 
                        onClick={ () => onClick(item)} id={item} className={styles.section}>
                    {item}
                    </div>
                )
            })}
        </div>
        
        {activeSection === "IOS" ? <div style={{marginTop: "10px"}}> <IOSFrontage/> </div>  : null}

        </div>
    )
}