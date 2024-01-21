import { IoCopyOutline } from "react-icons/io5";

import styles from "../../../styles/iosFrontage.module.css"

import { useSelector } from "react-redux";
import downloadSvg from "../../../functions/downloadSvg";
import downloadAndroidXml from "../../../functions/downloadAndroidXml";


export default function AndroidFrontage({receivedIconName = "test_icon_st"}) {


    const { iconObject } = useSelector((state) => state.reducer);

    let iconName = iconObject && iconObject.iconName ? iconObject.iconName.replaceAll(" ", "_").toLocaleLowerCase() : receivedIconName

    const handleCopyClick = async () => {
        try {
          await navigator.clipboard.writeText(iconName);
          const div = document.getElementById("notificationDiv") 
          if(div) {
              div.style.bottom = "0px"
              setTimeout(() => {
                // Code to be executed after the specified delay
                div.style.bottom = "-100px"
              }, 1500);
          }
        } catch (err) {
          console.error('Unable to copy to clipboard', err);
        }
      };


    const handleDownloadXml = (size) => {
        // This should be the div that holds the displyed icon
        const svgDiv = document.getElementById("ICON_DIV") 

        // console.log("size: ", size)

        if(iconObject && iconObject.iconName && svgDiv) {
            const svgString = svgDiv.innerHTML
            downloadAndroidXml(svgString, iconName)
        }
    }


   
    
    return(
        <div className={styles.IOSFrontage}>
            <div className={styles.child}>

                <div className={styles.title} style={{marginBottom: "20px"}}> Use in Android Studio </div>

                <div className={"code-snippet-box ios"}>
                    <code>
                    {iconName}
                    </code>

                    <div className={"copyButtonDiv"}  onClick={() => {handleCopyClick()}}> 
                        <IoCopyOutline size={25}/> 
                    </div>
                </div>

                <h4 style={{margin: "40px 0px"}}>Follow <a href="https://developer.android.com/studio/write/vector-asset-studio#svg" target="_blank">these instructions</a> to import SVG icons in Android Studio.</h4>
            </div>

            <div onClick={handleDownloadXml} className={styles.downloadButton}>Download XML</div>
         
        </div>
    )
}