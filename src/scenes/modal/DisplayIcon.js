import styles from "../../styles/modal.module.css"

export default function DisplayIcon({IconObject}) {

    console.log("IconFunc: ",IconObject, IconObject && IconObject.iconName)

    const IconFunction = IconObject && IconObject.iconFunction

    return(
        <div className={styles.nameAndIcon}>
                    
            <div>
                <div className={styles.iconName}>{IconObject && IconObject.iconName ? IconObject.iconName.trim() : "Blumb with which is looking lightning"}
                </div>
                <div className={styles.iconSection}>
                    {"Ant Design Icons"}
                </div>
            </div>
            

            {IconFunction ? <IconFunction fontSize={40} className={styles.icon} /> : null}
            
            {/* <DynamicSvgComponent data={iconFunction ? iconFunction() : null}/> */}
            
            {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="iconsList_icon__CKZ3C" height="35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M512 244c176.18 0 319 142.82 319 319v233a32 32 0 0 1-32 32H225a32 32 0 0 1-32-32V563c0-176.18 142.82-319 319-319zM484 68h56a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V76a8 8 0 0 1 8-8zM177.25 191.66a8 8 0 0 1 11.32 0l67.88 67.88a8 8 0 0 1 0 11.31l-39.6 39.6a8 8 0 0 1-11.31 0l-67.88-67.88a8 8 0 0 1 0-11.31l39.6-39.6zm669.6 0l39.6 39.6a8 8 0 0 1 0 11.3l-67.88 67.9a8 8 0 0 1-11.32 0l-39.6-39.6a8 8 0 0 1 0-11.32l67.89-67.88a8 8 0 0 1 11.31 0zM192 892h640a32 32 0 0 1 32 32v24a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-24a32 32 0 0 1 32-32zm148-317v253h64V575h-64z"></path></svg> */}

        </div>
    )
}