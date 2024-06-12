import React, { useState, useRef } from "react";

import { IoCopyOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

import styles from "./styles/iosFrontage.module.css";
// import styles from "../../../styles/modal.module.css"

import { useSelector, useDispatch } from "react-redux";
import { setDropdownProperties } from "./store/actions";

const dropdownObject = {
  visible: true,
  title: "Download PNG",
  custom: "Download",
  sendOption: () => {},
  stopLoading: () => {},
  options: ["30", "60", "70", "120", "240", "480"],
  includeImageset: false,
  recommendedIndex: 0,
  info: "Choose PNG size",
  wordAfterEachOption: "",
  rect: null,
};

export default function TestA() {
  const { iconObject } = useSelector((state) => state.reducer);

  const dispath = useDispatch();
  const donwloadPngButtonRef = useRef(null);
  const thisComponentRef = useRef(null);

  let iconName = "TestIcon";

  // const objective_c_to_copy =  `[UIImage imageNamed:@"${iconName}"]`

  const handleCopyClick = async (index) => {};

  const handleCopyRealSvgClick = async () => {};

  const onSvgDownload = () => {};

  // TODO:
  const copyRealImageToClipboard = async () => {};

  function showDropdown() {
    const rect = donwloadPngButtonRef.current.getBoundingClientRect();

    dropdownObject.rect = rect;
    dispath(setDropdownProperties(dropdownObject));
  }

  return (
    <div ref={thisComponentRef} className={styles.IOSFrontage}>
      <div className={styles.child}>
        <div>
          <h4> SVG Usage </h4>

          <div className={"code-snippet-box ios"}>
            <code>
              {/* <span className={"code-comment"}>  
                        {`// 1- If Downloaded as SVG:`}                                             
                        </span> */}

              <div className="code-line">
                <span className="code-comment">{`<`}</span>
                <span style={{ color: "#0096DF" }}>img</span>
                {/* <div style={{width:"100%", height: "10px"}}></div> */}

                <div
                  style={{
                    width: "97%",
                    marginLeft: "auto",
                    fontWeight: "600",
                    marginBottom: "-5px",
                  }}
                >
                  <div>
                    <span style={{ color: "rgba(143, 187, 253, 0.945)" }}>
                      {" "}
                      src
                    </span>
                    =
                    <span className={"code-string"}>
                      "path/to/downloaed/svg/
                      {iconName.replaceAll(" ", "_").toLocaleLowerCase()}.svg"
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "rgba(143, 187, 253, 0.945)" }}>
                      {" "}
                      height
                    </span>
                    =<span className={"code-string"}>"90"</span>
                  </div>
                  <div>
                    <span style={{ color: "rgba(143, 187, 253, 0.945)" }}>
                      {" "}
                      width
                    </span>
                    =<span className={"code-string"}>"90"</span>
                  </div>
                  <div>
                    <span style={{ color: "rgba(143, 187, 253, 0.945)" }}>
                      {" "}
                      alt
                    </span>
                    =
                    <span className={"code-string"}>
                      "{iconName.replaceAll(" ", "_").toLocaleLowerCase()}"
                    </span>
                    <span className="code-comment">{`/>`}</span>
                  </div>
                </div>
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

          <div className={styles.formatsButtonsDiv}>
            <div onClick={onSvgDownload} className={styles.downloadSvgButton}>
              <FiDownload style={{ marginRight: "10px" }} size={20} /> Download
              SVG
            </div>

            <div onClick={handleCopyRealSvgClick} className={styles.svgButton}>
              <IoCopyOutline style={{ marginRight: "10px" }} size={20} />{" "}
              <div>Copy SVG</div>
            </div>
          </div>

          <h4> PNG Usage </h4>

          <div className={"code-snippet-box ios"}>
            <code>
              <div className="code-line">
                <span className="code-comment">{`<`}</span>
                <span style={{ color: "#0096DF" }}>img</span>
                {/* <div style={{width:"100%", height: "10px"}}></div> */}

                <div
                  style={{
                    width: "97%",
                    marginLeft: "auto",
                    fontWeight: "600",
                    marginBottom: "-5px",
                  }}
                >
                  <div>
                    <span style={{ color: "rgba(143, 187, 253, 0.945)" }}>
                      {" "}
                      src
                    </span>
                    =
                    <span className={"code-string"}>
                      ""path/to/downloaed/png/
                      {iconName.replaceAll(" ", "_").toLocaleLowerCase()}.png"
                    </span>
                  </div>

                  <div>
                    <span style={{ color: "rgba(143, 187, 253, 0.945)" }}>
                      {" "}
                      height
                    </span>
                    =<span className={"code-string"}>"90"</span>
                  </div>

                  <div>
                    <span style={{ color: "rgba(143, 187, 253, 0.945)" }}>
                      {" "}
                      width
                    </span>
                    =<span className={"code-string"}>"90"</span>
                  </div>

                  <div>
                    <span style={{ color: "rgba(143, 187, 253, 0.945)" }}>
                      {" "}
                      alt
                    </span>
                    =
                    <span className={"code-string"}>
                      "{iconName.replaceAll(" ", "_").toLocaleLowerCase()}"
                    </span>
                    <span className="code-comment">{`/>`}</span>
                  </div>
                </div>
              </div>
            </code>

            <div
              className={"copyButtonDiv"}
              style={{ width: "35px", height: "35px" }}
              onClick={() => {
                handleCopyClick(2);
              }}
            >
              <IoCopyOutline />
            </div>
          </div>

          <div ref={donwloadPngButtonRef} className={styles.formatsButtonsDiv}>
            <div
              // ref={donwloadPngButtonRef}
              onClick={showDropdown}
              className={styles.downloadSvgButton}
            >
              <FiDownload style={{ marginRight: "10px" }} size={20} /> Download
              PNG
            </div>

            <div
              onClick={copyRealImageToClipboard}
              className={styles.svgButton}
            >
              <IoCopyOutline style={{ marginRight: "10px" }} size={20} />{" "}
              <div>Copy SVG</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
