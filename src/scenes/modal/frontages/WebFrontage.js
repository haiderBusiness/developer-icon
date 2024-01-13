import { IoCopyOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

import styles from "../../../styles/iosFrontage.module.css"
import downloadSvg from "../../../functions/downloadSvg";
import downloadSvgAsPng from "../../../functions/downloadSvgAsPng";


export default function WebFrontage({iconName = "test_icon_st"}) {

    const svg_to_copy =  `<img
    src="path/to/downloaed/svg/${iconName}.svg"
    height="90"
    width="90"
    alt="test_icon_st"/>`

    const png_to_copy =  `<img
    src="path/to/downloaed/png/${iconName}.png"
    height="90"
    width="90"
    alt="${iconName}"/>`

    // const objective_c_to_copy =  `[UIImage imageNamed:@"${iconName}"]`

    const handleCopyClick = async (index) => {
        try {
          await navigator.clipboard.writeText(index=== 1 ? svg_to_copy : png_to_copy);
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

      const onSvgDownload = () => {

        // This should be the div that holds the displyed icon
        const svgDiv = document.getElementById("ICON_DIV") 
          
        if (svgDiv) {
            // Get the svg string
            const svgString = svgDiv.innerHTML

            // Replace the width and height values in the SVG string
            const newSvgString = svgString.replace(/ width="[^"]*"/, ' width="800px"').replace(/height="[^"]*"/, 'height="800px"');

            downloadSvg(newSvgString, iconName)


            // console.log("svgDiv.innerHtml: ", newSvgString)
            // console.log('%c ' + "Success", 'color: red; font-size: 20px; text-transform: uppercase;');
            // console.log('%c ' + "Success: ", 'color: rgb(180, 48, 48); font-size: 12px; font-weight: 500; text-transform: uppercase;', "hello");
        }
      }

      const onPngDownLoad = () => {

        // This should be the div that holds the displyed icon
        const svgDiv = document.getElementById("ICON_DIV") 
          
        if (svgDiv) {
            // Get the svg string
            const svgString = svgDiv.innerHTML

            // Replace the width and height values in the SVG string
            const newSvgString = svgString.replace(/ width="[^"]*"/, ' width="800px"').replace(/height="[^"]*"/, 'height="800px"');

            downloadSvgAsPng(newSvgString, iconName)


            // console.log("svgDiv.innerHtml: ", newSvgString)
            // console.log('%c ' + "Success", 'color: red; font-size: 20px; text-transform: uppercase;');
            // console.log('%c ' + "Success: ", 'color: rgb(180, 48, 48); font-size: 12px; font-weight: 500; text-transform: uppercase;', "hello");
        }
      }
   
    
    return(
        <div className={styles.IOSFrontage}>
            <div className={styles.child}>

                {/* <div style={{marginBlock: "10px"}} className={styles.title}> Choose a format that suits your need</div> */}

                <div>
                {/* <div className={styles.title}>File as an SVG</div>
                <div style={{backgroundColor: "#FEB601", color: "white" , marginBlock: "10px"}} className={styles.downloadButton}>Download</div>

                <div className={styles.title}>Copy SVG to clipboard</div>
                <div style={{backgroundColor: "red", marginBlock: "10px"}} className={styles.downloadButton}>Copy</div>

                <div className={styles.title}>File as PNG</div>
                <div style={{backgroundColor: "green", marginBlock: "10px"}} className={styles.downloadButton}>Download</div>

                <div className={styles.title}>File as PNG</div>
                <div style={{backgroundColor: "green", marginBlock: "10px"}} className={styles.downloadButton}>Copy</div> */}

                    <h4> SVG Usage </h4>

                    <div className={"code-snippet-box ios"}>
                        <code>

                        <span className={"code-comment"}>  
                        {`// 1- If Downloaded as SVG:`}                                             
                        </span>

                        <div className="code-line"> 
                        
                        <span className="code-comment">{`<`}</span> 
                        <span style={{color: "#0096DF"}}>img</span>
                        {/* <div style={{width:"100%", height: "10px"}}></div> */}
                    
                        <div style={{width:"97%", marginLeft: "auto", fontWeight: "600"}}>
                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> src</span>=<span className={"code-string"}>"path/to/downloaed/svg/{iconName}.svg"</span></div>
                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> height</span>=<span className={"code-string"}>"90"</span></div>
                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> width</span>=<span className={"code-string"}>"90"</span></div>
                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> alt</span>=<span className={"code-string"}>"{iconName}"</span><span className="code-comment">{`/>`}</span></div>
                        </div>


                        <div style={{width:"100%", height: "30px"}}></div>
                        

                        <span className="code-comment">{`// 2- Else if you copied the SVG, either directlly past the copied svg code in your html code you want or past the copied code in a new file and save it as an svg e.g: ${iconName}.svg. And use the (1) method.`}</span> 
                            

                        </div> 
                        </code>
                
                        <div className={"copyButtonDiv"}  onClick={() => {handleCopyClick(1)}}> 
                            <IoCopyOutline size={25}/> 
                        </div>
                    </div>

                    <div className={styles.formatsButtonsDiv}>
                        <div onClick={onSvgDownload} className={styles.downloadSvgButton}>
                            <FiDownload style={{marginRight: "10px"}} size={20}/> Download SVG
                        </div>
                        
                        <div className={styles.svgButton}>
                            <IoCopyOutline style={{marginRight: "10px"}} size={20}/> <div>Copy SVG</div>
                        </div>
                    </div>





                    <h4> PNG Usage </h4>

                    <div className={"code-snippet-box ios"}>
                        <code>

                        <span className={"code-comment"}>  
                        {`// 1- If Downloaded as PNG:`}                                             
                        </span>

                        <div className="code-line"> 
                        
                        <span className="code-comment">{`<`}</span> 
                        <span style={{color: "#0096DF"}}>img</span>
                        {/* <div style={{width:"100%", height: "10px"}}></div> */}
                    
                        <div style={{width:"97%", marginLeft: "auto", fontWeight: "600"}}>
                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> src</span>=<span className={"code-string"}>""path/to/downloaed/png/{iconName}.png"</span></div>

                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> height</span>=<span className={"code-string"}>"90"</span></div>

                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> width</span>=<span className={"code-string"}>"90"</span></div>
                            
                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> alt</span>=<span className={"code-string"}>"{iconName}"</span><span className="code-comment">{`/>`}</span></div>
                        </div>


                        <div style={{width:"100%", height: "30px"}}></div>
                        

                        <span className="code-comment">{`// 2- Else if copied the PNG, past the copied image in an image file e.g: ${iconName}.png and use the (1) method.`}</span> 
                            

                        </div> 
                        </code>
                
                        <div className={"copyButtonDiv"}  onClick={() => {handleCopyClick(2)}}> 
                            <IoCopyOutline size={25}/> 
                        </div>
                    </div>


                    <div className={styles.formatsButtonsDiv}>
                        <div onClick={onPngDownLoad} className={styles.downloadPngButton}>
                            <FiDownload style={{marginRight: "10px"}} size={20}/> Download PNG
                        </div>
                        
                        <div className={styles.svgButton}>
                            <IoCopyOutline style={{marginRight: "10px"}} size={20}/> <div>Copy SVG</div>
                        </div>
                    </div>
                </div>
            
            </div>

            
         
        </div>
    )
}