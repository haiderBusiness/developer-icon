import { IoCopyOutline } from "react-icons/io5";

import styles from "../../../styles/iosFrontage.module.css"

import { useSelector } from "react-redux";
import downloadIosImageSet from "../../../functions/downloadIosImageSet";


export default function IOSFrontage({receivedIconName = "test_icon_st"}) {


    const { iconObject } = useSelector((state) => state.reducer);

    let iconName = iconObject && iconObject.iconName ? iconObject.iconName.replaceAll(" ", "_").toLocaleLowerCase() : receivedIconName

    const swiftUI_to_copy =  `Image("${iconName}")`

    const swift_uikit_to_copy =  `UIImage(named:"${iconName}")?`

    const objective_c_to_copy =  `[UIImage imageNamed:@"${iconName}"]`

    const handleCopyClick = async (index) => {
        try {
          await navigator.clipboard.writeText(index=== 1 ? swiftUI_to_copy : index === 2 ? swift_uikit_to_copy : objective_c_to_copy);
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


      const handleDownloadImageSet = () => {
            // This should be the div that holds the displyed icon
        const svgDiv = document.getElementById("ICON_DIV") 

        if(iconObject && iconObject.iconName && svgDiv) {

            const size = 24
            // Get the svg string
            const svgString = svgDiv.innerHTML
            // const newSvgString = svgString.replace(/ width="[^"]*"/, ` width="${size}"`).replace(/height="[^"]*"/, `height="${size}"`);


            downloadIosImageSet(svgString, iconName, size)
        }
      }

   
    
    return(
        <div className={styles.IOSFrontage}>
            <div className={styles.child}>

                <div className={styles.title}> Use in IOS</div>


                <h4> SwiftUI </h4>

                <div className={"code-snippet-box ios"}>
                    <code>
                
                    <span className={"code-comment"}>                                               
                    </span>

                    <div className="code-line"> 
                    
                    <span className="code-class-name">Image</span> 
                    
                        (<span className={"code-string"}>"{iconName}"</span>)

                    </div> 
                    </code>

                    <div className={"copyButtonDiv"}  onClick={() => {handleCopyClick(1)}}> 
                        <IoCopyOutline size={25}/> 
                    </div>
                </div>




                <h4> Swift </h4>

                <div className={"code-snippet-box ios"}>
                    <code>
                
                    

                    <div className="code-line"> 
                    <span className="code-class-name">UIImage</span> 
                    
                        (<span className={"code-builtin-function"}>named</span>:<span className="code-"></span><span className={"code-string"}>"{iconName}"</span>)?

                    </div> 
                    </code>

                    <div className={"copyButtonDiv"}  onClick={() => {handleCopyClick(2)}}> 
                        <IoCopyOutline size={25}/> 
                    </div>
                </div>


                <h4> Objective-C </h4>

                <div className={"code-snippet-box ios"}>
                    <code>
                        <div className="code-line"> 
                        [
                        <span className="code-class-name">UIImage </span> 

                            <span className={"code-builtin-function"}>imageNamed</span>:@<span className="code-"></span><span className={"code-string"}>"{iconName}"</span>]
                        </div> 
                    </code>

                    <div className={"copyButtonDiv"}  onClick={() => {handleCopyClick(3)}}> 
                        <IoCopyOutline size={25}/> 
                    </div>
                </div>
                
                    

                <h4 style={{margin: "40px 0px"}}>Follow <a href="https://developer.apple.com/documentation/uikit/uiimage/configuring_and_displaying_symbol_images_in_your_ui" target="_blank">these instructions</a> to use symbols.</h4>
            </div>

            <div style={{paddingTop: "10px", backgroundColor: "var(--background)", borderTop: "2px solid var(--background-hover)"}}>
                <div onClick={handleDownloadImageSet} className={styles.downloadButton}>Download</div>
            </div>
         
        </div>
    )
}