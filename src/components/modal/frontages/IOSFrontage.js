import { IoCopyOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { CiCircleInfo } from "react-icons/ci";

import styles from "../../../styles/iosFrontage.module.css";

import { useSelector } from "react-redux";
import downloadIosImageSet from "../../../functions/downloadIosImageSet";
import Dropdown2 from "../../../components/dropdown/Dropdown2";
import { useState } from "react";

export default function IOSFrontage({ receivedIconName = "test_icon_st" }) {
  const { iconObject } = useSelector((state) => state.reducer);

  let iconName =
    iconObject && iconObject.iconName
      ? iconObject.iconName.replaceAll(" ", "_").toLocaleLowerCase()
      : receivedIconName;

  const swiftUI_to_copy = `Image("${iconName}")`;

  const swift_uikit_to_copy = `UIImage(named:"${iconName}")?`;

  const objective_c_to_copy = `[UIImage imageNamed:@"${iconName}"]`;

  const handleCopyClick = async (index) => {
    try {
      await navigator.clipboard.writeText(
        index === 1
          ? swiftUI_to_copy
          : index === 2
          ? swift_uikit_to_copy
          : objective_c_to_copy
      );
      const div = document.getElementById("notificationDiv");
      if (div) {
        div.style.bottom = "0px";
        setTimeout(() => {
          // Code to be executed after the specified delay
          div.style.bottom = "-100px";
        }, 1500);
      }
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
  };

  const [updateLoading, setUpdateLoading] = useState(true);

  const handleDownloadImageSet = (size) => {
    // This should be the div that holds the displyed icon
    const svgDiv = document.getElementById("ICON_DIV");

    // console.log("size: ", size)

    if (iconObject && iconObject.iconName && svgDiv) {
      // let size = 24

      // if(index === 0) {
      //     size = 30
      // } else if (index === 1) {
      //     size = 60
      // } else if (index === 2) {
      //     size = 90
      // } else if (index === 3) {
      //     size = 120
      // } else if (index === 4) {
      //     size = 240
      // } else {
      //     size = 480
      // }

      // Get the svg string
      const svgString = svgDiv.innerHTML;
      // const newSvgString = svgString.replace(/ width="[^"]*"/, ` width="${size}"`).replace(/height="[^"]*"/, `height="${size}"`);

      // const name = `${iconName}_${size}px`

      downloadIosImageSet(svgString, iconName, size, () => {
        setUpdateLoading((it) => !it);
      });
    }
  };

  return (
    <div className={styles.IOSFrontage}>
      <div className={styles.child}>
        <div className={styles.title}> Use in IOS</div>

        <h4> SwiftUI </h4>

        <div className={"code-snippet-box ios"}>
          <code>
            <span className={"code-comment"}></span>

            <div className="code-line">
              <span className="code-class-name">Image</span>(
              <span className={"code-string"}>"{iconName}"</span>)
            </div>
          </code>

          <div
            className={"copyButtonDiv"}
            onClick={() => {
              handleCopyClick(1);
            }}
          >
            <IoCopyOutline />
          </div>
        </div>

        <h4> Swift </h4>

        <div className={"code-snippet-box ios"}>
          <code>
            <div className="code-line">
              <span className="code-class-name">UIImage</span>(
              <span className={"code-builtin-function"}>named</span>:
              <span className="code-"></span>
              <span className={"code-string"}>"{iconName}"</span>)?
            </div>
          </code>

          <div
            className={"copyButtonDiv"}
            onClick={() => {
              handleCopyClick(2);
            }}
          >
            <IoCopyOutline />
          </div>
        </div>

        <h4> Objective-C </h4>

        <div className={"code-snippet-box ios"}>
          <code>
            <div className="code-line">
              [<span className="code-class-name">UIImage </span>
              <span className={"code-builtin-function"}>imageNamed</span>:@
              <span className="code-"></span>
              <span className={"code-string"}>"{iconName}"</span>]
            </div>
          </code>

          <div
            className={"copyButtonDiv"}
            onClick={() => {
              handleCopyClick(3);
            }}
          >
            <IoCopyOutline />
          </div>
        </div>

        <h4 style={{ margin: "40px 0px" }}>
          Follow{" "}
          <a
            href="https://developer.apple.com/documentation/xcode/adding-images-to-your-xcode-project"
            target="_blank"
          >
            these instructions
          </a>{" "}
          to import images in Xcode.
        </h4>

        <div style={{ marginBottom: "40px", display: "flex" }}>
          <CiCircleInfo size={20} />
          <div style={{ marginLeft: "10px" }}>Imageset (@1x, @2x, @3x)</div>
        </div>
      </div>

      {/* <div className={styles.formatsButtonsDiv}>
                <div onClick={() => {}} className={styles.downloadPngButton}>
                    <FiDownload style={{marginRight: "10px"}} size={20}/> Download PNG
                </div>
                
                <div className={styles.svgButton}>
                    <IoCopyOutline style={{marginRight: "10px"}} size={20}/> <div>Copy PNG</div>
                </div>
            </div> */}

      <Dropdown2
        title={"Choose imageset"}
        custom={"Download"}
        sendOption={(size) => {
          handleDownloadImageSet(size);
        }}
        stopLoading={updateLoading}
      />
      {/* <div style={{paddingTop: "10px", backgroundColor: "var(--background)", borderTop: "2px solid var(--background-hover)"}}>
                <div onClick={handleDownloadImageSet} className={styles.downloadButton}>Download</div>
            </div> */}
    </div>
  );
}
