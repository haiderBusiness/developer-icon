import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5"
import { IoCheckmark } from "react-icons/io5";
import styles from "./styles/copyButton.module.css"

export default function CopyButton({onClick = () => {}, text}) {

    const [show, setShow] = useState(false)
    
    return (
        <div className={styles.copyButtonDiv}  onClick={() => onClick()}> 
            { show &&
            <>
                <IoCheckmark size={20}/> 
                <div className>Copied!</div>  
            </>
            }

                <IoCopyOutline style={{marginRight: "10px"}} size={20}/> 
                <div>Copy PNG</div>
    
            
        </div>
    )
}