
import styles from "../../styles/rightSideBar.module.css"
export default function RightSideBar() {

    return(
        <div id="RightSideBar" className={styles.rightSideBar}>
            <li><a href="#">Icons</a></li>
            <li><a href="#">Usage</a></li>
            <li><a href="#">GitHub</a></li>
        </div>
    )
}