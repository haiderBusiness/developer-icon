
import { useEffect, useState } from "react";
import styles from "../../styles/modalStyles.module.css"
import { useSelector } from "react-redux"
import DynamicSvgComponent from "../../components/DynamicSvgComponent";


function Modal() {

    
   

    const { iconFunction } = useSelector((state) => state.reducer);





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

    return(
        <div className={styles.modal}>
            <h2>Extracted SVG:</h2>
            <DynamicSvgComponent data={iconFunction ? iconFunction() : null}/>
        </div>
    )
}


export default Modal;


