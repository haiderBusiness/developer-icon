import { IoCopyOutline } from "react-icons/io5";

import styles from "../../../styles/iosFrontage.module.css"


export default function AndroidFrontage({iconName = "test_icon_st"}) {

    const swift_uikit_to_copy =  `UIImage(named:"${iconName}"")?`

    const objective_c_to_copy =  `[UIImage imageNamed:@"${iconName}"]`

    const handleCopyClick = async (index) => {
        try {
          await navigator.clipboard.writeText(index=== 1 ? swift_uikit_to_copy : objective_c_to_copy);
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
    
    return(
        <div className={styles.IOSFrontage}>
            <div className={styles.title}> Use in IOS</div>



            <h4> Swift </h4>

            <div className={"code-snippet-box ios"}>
                <code>
               
                

                <div class="code-line"> 
                <span className="code-class-name">UIImage</span> 
                
                    (<span className={"code-builtin-function"}>named</span>:<span className="code-"></span><span className={"code-string"}>"{iconName}"</span>)?

                </div> 
                </code>

                <div className={"copyButtonDiv"}  onClick={() => {handleCopyClick(1)}}> 
                    <IoCopyOutline size={25}/> 
                </div>
            </div>


            <h4> Objective-C </h4>

            <div className={"code-snippet-box ios"}>
                <code>
                    <div class="code-line"> 
                    [
                    <span className="code-class-name">UIImage </span> 

                        <span className={"code-builtin-function"}>imageNamed</span>:@<span className="code-"></span><span className={"code-string"}>"{iconName}"</span>]
                    </div> 
                </code>

                <div className={"copyButtonDiv"}  onClick={() => {handleCopyClick(2)}}> 
                    <IoCopyOutline size={25}/> 
                </div>
            </div>
            
                

        <h4>Follow <a href="https://developer.apple.com/documentation/uikit/uiimage/configuring_and_displaying_symbol_images_in_your_ui" target="_blank">these instructions</a> to use symbols.</h4>
                   
        </div>
    )
}