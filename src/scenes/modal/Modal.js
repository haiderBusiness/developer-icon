
import { useEffect, useState } from "react";
import styles from "../../styles/modal.module.css"
import { useSelector } from "react-redux"
import DynamicSvgComponent from "../../components/DynamicSvgComponent";
import DisplayIcon from "./DisplayIcon";
import TopBar from "./TopBar";
import DisplaySections from "./DisplaySections";
import { IconContext } from "react-icons/lib";


function Modal() {

    const identifier = "iconModal"

    const { iconObject } = useSelector((state) => state.reducer);

    // const [Icon, setIcon] = useState(null)

     const Icon = iconObject
     


    // useEffect(() => {
    //     if (iconObject && iconObject.iconFunction ) {
    //         //console.log(iconObject())
            
    //         const Icon = iconObject.iconFunction
    //         setIcon(Icon)
    //         console.log("iconObject",<Icon/>)
    //      }

    //      console.log("iconObject",iconObject)
    // }, [iconObject])

    useEffect(() => {
        if (iconObject && iconObject.iconFunction ) {
            //console.log(iconObject())
            
            const Icon = iconObject.iconFunction
            // setIcon(Icon)
            // console.log("<Icon/>: ",<Icon/>)
            // console.log("iconName: ",iconObject.iconFunction.name)
         }

         
    }, [iconObject])


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
        const div = document.getElementById("iconModal")
        if (div) {
            div.style.zIndex = "-1"

            if(window.location.hash.includes("icon_")) {
                const modifiedString = window.location.hash.replace(/\/icon.*/, '');
                window.location.hash = modifiedString
            }
        } 
    }

    return(

        <div id={identifier} className={styles.modal}>
            <div onClick={() =>  hideModal()} style={{width:"100%", height: "100%", position: "fixed"}}/>
            <div className={styles.child}>

                <TopBar onClosingClick={() => hideModal()}/>
                
                <DisplayIcon IconObject={iconObject}/>

                <DisplaySections/>

            </div>
            
        </div>
    )
}


export default Modal;


