
import { useEffect, useState } from "react";
import styles from "../../styles/modal.module.css"
import { useSelector } from "react-redux"
import DynamicSvgComponent from "../../components/DynamicSvgComponent";
import DisplayIcon from "./DisplayIcon";
import TopBar from "./TopBar";
import DisplaySections from "./DisplaySections";


function Modal() {

    const identifier = "iconModal"

    
   

    const { iconFunction } = useSelector((state) => state.reducer);

    const Icon = iconFunction


    useEffect(() => {
        if (iconFunction && iconFunction().props && iconFunction().props.children) {
            //console.log(iconFunction())
         }
    }, [iconFunction])


    // function pathNames() {
    //     const pathLists = []
    //     if (svgData && svgData.pathData && svgData.pathData) {
            
    //         svgData.pathData.forEach((item, index) => {
    //             console.log(item)
    //             pathLists.push( <path fill="#373737" strokeWidth="0.5" stroke="none" d={item} />);
    //             })
    //         setPathLists(pathLists)
    //     }
    // }

    const hideModal = () => {
        const div = document.getElementById(identifier)
        if (div) {
            div.style.zIndex = "-1"
        }
    }

    return(
        <div id={identifier} className={styles.modal}>
            <div className={styles.child}>

                <TopBar onClosingClick={() => hideModal()}/>
                
                <DisplayIcon IconFunc={Icon}/>

                <DisplaySections/>
                
                
            </div>
            
        </div>
    )
}


export default Modal;


