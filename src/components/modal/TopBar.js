import { IoMdClose, IoMdShare } from "react-icons/io";
import styles from "../../styles/modal.module.css"

export default function TopBar({onClosingClick}) {

    return(
        <div className={styles.topBar}>

            {/* <div className={styles.sharingDiv}>
                <IoMdShare size={31}/>
            </div> */}

            <div onClick={onClosingClick} className={styles.closingDiv}>
                <IoMdClose size={35}/>
            </div>
        </div>

        
    )
}