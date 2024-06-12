import React, { useState, useRef, useEffect } from "react";

import { IoCopyOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { CiCircleInfo } from "react-icons/ci";

import styles from "../../../styles/iosFrontage.module.css";

// import { useSelector } from "react-redux";
// import downloadSvg from "../../../functions/downloadSvg";
// import downloadAndroidXml from "../../../functions/downloadAndroidXml";
import downloadAndroidImageset from "../../../functions/downloadAndroidImageset";
// import Dropdown2 from "../../dropdown/Dropdown2";

import { useSelector, useDispatch } from "react-redux";
import { setDropdownProperties } from "../../../store/actions";

export default function AndroidFrontage({ receivedIconName = "test_icon_st" }) {
  const { iconObject } = useSelector((state) => state.reducer);

  let iconName =
    iconObject && iconObject.iconName
      ? iconObject.iconName.replaceAll(" ", "_").toLocaleLowerCase()
      : receivedIconName;

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(iconName);
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

  const handleDownloadImageset = (size) => {
    // This should be the div that holds the displyed icon
    const svgDiv = document.getElementById("ICON_DIV");

    // console.log("size: ", size)

    if (iconObject && iconObject.iconName && svgDiv) {
      // Get the svg string
      const svgString = svgDiv.innerHTML;

      downloadAndroidImageset(svgString, iconName, size, () => {
        setUpdateLoading((it) => !it);
      });
      // downloadAndroidXml(svgString, iconName)
    }
  };

  const dispath = useDispatch();
  const downloadButtonRef = useRef(null);
  const thisComponentRef = useRef(null);

  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(false);
  }, [updateLoading]);

  const dropdownObject = {
    visible: true,
    title: "Choose imageset",
    custom: "Download",
    sendOption: (size) => {
      handleDownloadImageset(size);
    },
    stopLoading: updateLoading,
    showLoading: () => setShowLoading(true),
    options: ["30", "60", "70", "120", "240", "480"],
    includeImageset: true,
    recommendedIndex: 0,
    info: "Imageset (ldpi, mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi)",
    wordAfterEachOption: "imageset",
    rect: null,
    center: true,
  };

  function showDropdown() {
    const rect = downloadButtonRef.current.getBoundingClientRect();
    // rect.top = rect.top + thisComponentRef.current.scrollY;
    dropdownObject.rect = rect;

    dispath(setDropdownProperties(dropdownObject));
  }

  return (
    <div className={styles.IOSFrontage}>
      <div className={styles.child}>
        <div className={styles.title} style={{ marginBottom: "20px" }}>
          {" "}
          Use in Android Studio{" "}
        </div>

        <div className={"code-snippet-box ios"}>
          <code>{iconName}</code>

          <div
            className={"copyButtonDiv"}
            onClick={() => {
              handleCopyClick();
            }}
          >
            <IoCopyOutline />
          </div>
        </div>

        <h4 style={{ margin: "40px 0px" }}>
          Follow{" "}
          <a
            href="https://developer.android.com/studio/write/resource-manager"
            target="_blank"
          >
            these instructions
          </a>{" "}
          to import images in Android Studio.
        </h4>
      </div>

      <div style={{ marginBottom: "40px", display: "flex" }}>
        <CiCircleInfo className={styles.icon} />
        <div style={{ marginLeft: "10px" }}>
          Imageset (ldpi, mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi)
        </div>
      </div>

      <div className={styles.formatsButtonsDiv}>
        <div
          ref={downloadButtonRef}
          onClick={showDropdown}
          style={{
            width: "fit-content",
            marginRight: "auto",
            marginLeft: "auto",
            paddingInline: "10px",
          }}
          className={styles.downloadPngButton}
        >
          {showLoading ? (
            <span
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
              className="loader"
            ></span>
          ) : (
            <FiDownload style={{ marginRight: "10px" }} size={20} />
          )}
          Choose imageset
        </div>
      </div>

      {/* <div onClick={handleDownloadXml} className={styles.downloadButton}>Download Android Imageset</div> */}

      {/* <Dropdown2
        title={"Choose imageset"}
        custom={"Download"}
        sendOption={(size) => {
          handleDownloadImageset(size);
        }}
        stopLoading={updateLoading}
        options={["30", "60", "70", "120", "240", "480"]}
        includeImageset={true}
        recommendedIndex={0}
        info="Imageset (ldpi, mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi)"
        wordAfterEachOption={"imageset"}
      /> */}
    </div>
  );
}
