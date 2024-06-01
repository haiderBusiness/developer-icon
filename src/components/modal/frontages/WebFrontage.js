import React, {useState} from "react";

import { IoCopyOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

import styles from "../../../styles/iosFrontage.module.css"
// import styles from "../../../styles/modal.module.css"
import downloadSvg from "../../../functions/downloadSvg";
import downloadSvgAsPng from "../../../functions/downloadSvgAsPng";
import { useSelector } from "react-redux";
import CopyButton from "../../buttons/CopyButton";
import Dropdown2 from "../../../components/dropdown/Dropdown2";




export default function WebFrontage({receivedIconName = "test_icon_st"}) {


    const { iconObject } = useSelector((state) => state.reducer);

    let iconName = iconObject && iconObject.iconName ? iconObject.iconName.replaceAll(" ", "_").toLocaleLowerCase() : receivedIconName



    const svg_to_copy =  `<img
    src="path/to/downloaed/svg/${iconName}.svg"
    height="90"
    width="90"
    alt="${iconName}"/>`

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


      const handleCopyRealSvgClick = async () => {
        try {
            const svgDiv = document.getElementById("ICON_DIV") 
          const svgString = svgDiv.innerHTML
          await navigator.clipboard.writeText(svgString);
        } catch (err) {
          console.error('Unable to copy to clipboard', err);
        }
      };

      const onSvgDownload = () => {

        // This should be the div that holds the displyed icon
        const svgDiv = document.getElementById("ICON_DIV") 

        if(iconObject && iconObject.iconName && svgDiv) {

            // iconName = iconObject.iconName
            
            // Get the svg string
            const svgString = svgDiv.innerHTML

            // Replace the width and height values in the SVG string
            // const newSvgString = svgString.replace(/ width="[^"]*"/, ' width="800px"').replace(/height="[^"]*"/, 'height="800px"');
            const newSvgString = svgString.replace(/ width="[^"]*"/, ' width="24"').replace(/height="[^"]*"/, 'height="24"');


            downloadSvg(newSvgString, iconName)

            // console.log("svgDiv.innerHtml: ", newSvgString)
            // console.log('%c ' + "Success", 'color: red; font-size: 20px; text-transform: uppercase;');
            // console.log('%c ' + "Success: ", 'color: rgb(180, 48, 48); font-size: 12px; font-weight: 500; text-transform: uppercase;', "hello");
        }
      }



      

      // TODO:
      const copyRealImageToClipboard = async () => {
        const svgDiv = document.getElementById("ICON_DIV") 
        const svgString = svgDiv.innerHTML
            try {
              const blob = new Blob([svgString], { type: 'image/svg+xml' });
              const clipboardItem = new ClipboardItem({ 'image/svg+xml': blob });
              await navigator.clipboard.write([clipboardItem]);
              alert('SVG copied to clipboard!');
            } catch (error) {
              console.error('Failed to copy SVG: ', error);
            }
    
      }
      

    //   const onPngDownload = () => {

    //     // This should be the div that holds the displyed icon
    //     const svgDiv = document.getElementById("ICON_DIV") 
          
    //     if(iconObject && iconObject.iconName && svgDiv) {

    //         // iconName = iconObject.iconName

            

    //         // Get the svg string
    //         const svgString = svgDiv.innerHTML


    //         // Replace the width and height values in the SVG string
    //         // const newSvgString = svgString.replace(/ width="[^"]*"/, ' width="800px"').replace(/height="[^"]*"/, 'height="800px"');
    //         const newSvgString = svgString.replace(/ width="[^"]*"/, ' width="24"').replace(/height="[^"]*"/, 'height="24"');

    //         downloadSvgAsPng(newSvgString, iconName)


    //         // console.log("svgDiv.innerHtml: ", newSvgString)
    //         // console.log('%c ' + "Success", 'color: red; font-size: 20px; text-transform: uppercase;');
    //         // console.log('%c ' + "Success: ", 'color: rgb(180, 48, 48); font-size: 12px; font-weight: 500; text-transform: uppercase;', "hello");
    //     }
    //   }



      const [updateLoading, setUpdateLoading] = useState(true)

    const handleDownloadImage = (size) => {
        // This should be the div that holds the displyed icon
    const svgDiv = document.getElementById("ICON_DIV") 

    // console.log("size: ", size)

    if(iconObject && iconObject.iconName && svgDiv) {



        // Get the svg string
        const svgString = svgDiv.innerHTML
        const newSvgString = svgString.replace(/ width="[^"]*"/, ` width="${size}"`).replace(/height="[^"]*"/, `height="${size}"`);


        downloadSvgAsPng(newSvgString, iconName, size, () => {setUpdateLoading(it => !it)})

        // const name = `${iconName}_${size}px`

        // downloadIosImageset(svgString, iconName, size, () => {console.log("logged here"); setUpdateLoading(it => !it)})
        
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

                        {/* <span className={"code-comment"}>  
                        {`// 1- If Downloaded as SVG:`}                                             
                        </span> */}

                        <div className="code-line"> 
                        
                        <span className="code-comment">{`<`}</span> 
                        <span style={{color: "#0096DF"}}>img</span>
                        {/* <div style={{width:"100%", height: "10px"}}></div> */}
                    
                        <div style={{width:"97%", marginLeft: "auto", fontWeight: "600", marginBottom: "-5px"}}>
                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> src</span>=<span className={"code-string"}>"path/to/downloaed/svg/{iconName.replaceAll(" ", "_").toLocaleLowerCase()}.svg"</span></div>
                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> height</span>=<span className={"code-string"}>"90"</span></div>
                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> width</span>=<span className={"code-string"}>"90"</span></div>
                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> alt</span>=<span className={"code-string"}>"{iconName.replaceAll(" ", "_").toLocaleLowerCase()}"</span><span className="code-comment">{`/>`}</span></div>
                        </div>


                        {/* <div style={{width:"100%", height: "30px"}}></div> */}
                        

                        {/* <span className="code-comment">{`// 2- Else if you copied the SVG, either directlly past the copied svg code in your html code you want or past the copied code in a new file and save it as an svg e.g: ${iconName}.svg. And use the (1) method.`}</span>  */}
                            

                        </div> 
                        </code>
                
                        <div className={"copyButtonDiv"}  onClick={() => {handleCopyClick(1)}}> 
                            <IoCopyOutline/> 
                        </div>
                    </div>

                    <div className={styles.formatsButtonsDiv}>
                        <div onClick={onSvgDownload} className={styles.downloadSvgButton}>
                            <FiDownload style={{marginRight: "10px"}} size={20}/> Download SVG
                        </div>
                        
                        <div onClick={handleCopyRealSvgClick} className={styles.svgButton}>
                            <IoCopyOutline style={{marginRight: "10px"}} size={20}/> <div>Copy SVG</div>
                        </div>
                    </div>





                    <h4> PNG Usage </h4>

                    <div className={"code-snippet-box ios"}>
                        <code>

                        {/* <span className={"code-comment"}>  
                        {`// 1- If Downloaded as PNG:`}                                             
                        </span> */}

                        <div className="code-line"> 
                        
                        <span className="code-comment">{`<`}</span> 
                        <span style={{color: "#0096DF"}}>img</span>
                        {/* <div style={{width:"100%", height: "10px"}}></div> */}
                    
                        <div style={{width:"97%", marginLeft: "auto", fontWeight: "600", marginBottom: "-5px"}}>
                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> src</span>=<span className={"code-string"}>""path/to/downloaed/png/{iconName.replaceAll(" ", "_").toLocaleLowerCase()}.png"</span></div>

                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> height</span>=<span className={"code-string"}>"90"</span></div>

                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> width</span>=<span className={"code-string"}>"90"</span></div>
                            
                            <div><span style={{color: "rgba(143, 187, 253, 0.945)"}}> alt</span>=<span className={"code-string"}>"{iconName.replaceAll(" ", "_").toLocaleLowerCase()}"</span><span className="code-comment">{`/>`}</span></div>
                        </div>


                        {/* <div style={{width:"100%", height: "30px"}}></div> */}
                        

                        {/* <span className="code-comment">{`// 2- Else if copied the PNG, past the copied image in an image file e.g: ${iconName}.png and use the (1) method.`}</span>  */}
                            

                        </div> 
                        </code>
                
                        <div className={"copyButtonDiv"} style={{width: "35px", height: "35px"}}  onClick={() => {handleCopyClick(2)}}> 
                            <IoCopyOutline/> 
                        </div>
                    </div>


                    <div className={styles.formatsButtonsDiv}>
                        {/* <div onClick={onPngDownload} className={styles.downloadPngButton}>
                            <FiDownload style={{marginRight: "10px"}} size={20}/> Download PNG
                        </div> */}


                        <div className={styles.dropDown}>
                        <Dropdown2 
                        title={"Download PNG"} 
                        custom={"Download"} 
                        sendOption={(size) => {handleDownloadImage(size)}} 
                        stopLoading={updateLoading}
                        options={["30", "60", "70", "120", "240", "480"]}
                        includeImageset={false}
                        recommendedIndex={0}
                        info="Choose PNG size"
                        wordAfterEachOption={""}
                        />
                        </div>



                        
                        {/* <div className={styles.svgButton}>
                            <IoCopyOutline style={{marginRight: "10px"}} size={20}/> <div>Copy PNG</div>
                        </div> */}
                        {/* <CopyButton/> */}

                        <div onClick={copyRealImageToClipboard} className={styles.svgButton}>
                            <IoCopyOutline style={{marginRight: "10px"}} size={20}/> <div>Copy SVG</div>
                        </div>
                    </div>
                </div>
            
            </div>

            
         
        </div>
    )


    // const identifier = "frontageContainer"

    // return (
    //         <div id={identifier} className={styles.listContainer}>
    //           <div class={styles.list}>
    //             <p>Line 1</p>
    //             <p>Line 2</p>
    //             <p>Line 3</p>
    //             <p>Line 4</p>
    //             <p>Line 5</p>
    //             <p>Line 6</p>
    //             <p>Line 7</p>
    //             <p>Line 8</p>
    //             <p>Line 9</p>
    //             <p>Line 10</p>
    //           </div> 
    //         </div>
            
    // )
}