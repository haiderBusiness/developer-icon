import { useEffect, useState } from "react";
import styles from "../../styles/modal.module.css";
import { useSelector } from "react-redux";
import DynamicSvgComponent from "../../components/DynamicSvgComponent";
import DisplayIcon from "./DisplayIcon";
import TopBar from "./TopBar";
import DisplaySections from "./DisplaySections";
import { IconContext } from "react-icons/lib";
import AndroidVectorDrawablePreview from "../../components/AndroidVectorDrawablePreview";
import WebFrontage from "./frontages/WebFrontage";
import IOSFrontage from "./frontages/IOSFrontage";
import AndroidFrontage from "./frontages/AndroidFrontage";

function Modal() {
  const identifier = "iconModal";

  const { iconObject } = useSelector((state) => state.reducer);

  // const [Icon, setIcon] = useState(null)

  const Icon = iconObject;

  // useEffect(() => {
  //     if (iconObject && iconObject.iconFunction ) {
  //         //console.log(iconObject())

  //         const Icon = iconObject.iconFunction
  //         setIcon(Icon)
  //         console.log("iconObject",<Icon/>)
  //      }

  //      console.log("iconObject",iconObject)
  // }, [iconObject])

  useEffect(() => {
    if (iconObject && iconObject.iconFunction) {
      //console.log(iconObject())

      const Icon = iconObject.iconFunction;
      // setIcon(Icon)
      // console.log("<Icon/>: ",<Icon/>)
      // console.log("iconName: ",iconObject.iconFunction.name)
    }
  }, [iconObject]);

  // function pathNames() {
  //     const pathLists = []
  //     if (svgData && svgData.pathData && svgData.pathData) {

  //         svgData.pathData.forEach((item, index) => {
  //             console.log(item)
  //             pathLists.push( <path fill="#373737" strokeWidth="0.5" stroke="none" d={item} />);
  //             })
  //         setPathLists(pathLists)
  //     }
  // }

  const hideModal = () => {
    const div = document.getElementById("iconModal");
    if (div) {
      div.style.zIndex = "-1";
      div.style.opacity = "0";

      document.body.style.overflow = "auto";

      if (window.location.hash.includes("icon_")) {
        const modifiedString = window.location.hash.replace(/\/icon.*/, "");
        window.location.hash = modifiedString;
      }
    }
  };

  const [activeSection, setActiveSection] = useState("Web");

  const onClick = (section) => {
    setActiveSection(section);
  };

  const xmlString = `<vector xmlns:android="http://schemas.android.com/apk/res/android"
                        android:width="24dp"
                        android:height="24dp"
                        android:viewportWidth="960"
                        android:viewportHeight="960"
                        android:tint="?attr/colorControlNormal">
                        <path
                            android:fillColor="@android:color/white"
                            android:pathData="M480,880L440,760L160,760Q127,760 103.5,736.5Q80,713 80,680L80,160Q80,127 103.5,103.5Q127,80 160,80L400,80L435,200L800,200Q835,200 857.5,222.5Q880,245 880,280L880,800Q880,833 857.5,856.5Q835,880 800,880L480,880ZM286,584Q355,584 399.5,539.5Q444,495 444,424Q444,416 443.5,409.5Q443,403 441,396L283,396L283,458L372,458Q364,486 341.5,501.5Q319,517 287,517Q248,517 220,489Q192,461 192,420Q192,379 220,351Q248,323 287,323Q305,323 321,329.5Q337,336 350,349L399,302Q378,280 348.5,268Q319,256 286,256Q219,256 171.5,303.5Q124,351 124,420Q124,489 171.5,536.5Q219,584 286,584ZM554,604L576,583Q562,566 550.5,550Q539,534 528,516L554,604ZM604,553Q632,520 646.5,490Q661,460 666,443L507,443L519,485L559,485Q567,500 578,517.5Q589,535 604,553ZM520,840L800,840Q818,840 829,828.5Q840,817 840,800L840,280Q840,262 829,251Q818,240 800,240L447,240L494,402L573,402L573,360L614,360L614,402L760,402L760,443L709,443Q699,481 679,517Q659,553 632,584L741,691L712,720L604,612L568,649L600,760L520,840Z"/>
                        </vector>`;

  return (
    <div id={identifier} className={styles.modal}>
      {/* <div onClick={() =>  hideModal()} style={{width:"100%", height: "100%", position: "fixed"}}/> */}
      <div id="modal_child" className={styles.child}>
        <div className={styles.header}>
          <TopBar onClosingClick={() => hideModal()} />

          <DisplayIcon IconObject={iconObject} />

          <DisplaySections onSectionChange={onClick} />
        </div>

        {activeSection === "IOS" ? (
          <IOSFrontage />
        ) : activeSection === "Android" ? (
          <AndroidFrontage />
        ) : activeSection === "Web" ? (
          <WebFrontage />
        ) : null}

        {/* 
            <div class={styles.list}>
                <p>Line 1</p>
                <p>Line 2</p>
                <p>Line 3</p>
                <p>Line 4</p>
                <p>Line 5</p>
                <p>Line 6</p>
                <p>Line 7</p>
                <p>Line 8</p>
                <p>Line 9</p>
                <p>Line 10</p>
            </div> */}

        {/* <AndroidVectorDrawablePreview xmlString={xmlString}/> */}
      </div>
    </div>
  );
}

export default Modal;
