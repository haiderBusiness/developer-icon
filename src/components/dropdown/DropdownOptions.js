import React, { useEffect, useState, useRef } from "react";

import { FiDownload } from "react-icons/fi";
import { CiCircleInfo } from "react-icons/ci";

import styles from "./dropdownOptions.module.css";
import useOnClickOutside from "../../functions/useOnClickOutside";

import { useDispatch, useSelector } from "react-redux";

export default function DropdownOptions({
  title = "Select PNG",
  options = ["30", "60", "70", "120", "240", "480"],
  wordAfterEachOption = "imageset",
  sendOption = () => {},
  custom = null,
  stopLoading,
  recommendedIndex = 0,
  includeImageset = false,
  info = "Imageset (@1x, @2x, @3x)",
}) {
  const { dropdownProperties } = useSelector((state) => state.reducer);
  const [position, setPosition] = useState({ left: 0, right: 0, top: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleMouseClick = (event) => {
    /// -> mouse poistion
    // const { clientX, clientY } = event;
    // console.log("clicked")
    // setPosition({ left: clientX, top: clientY - 50 });
    // setIsVisible(true);

    /// -> div position
    const div = document.getElementById("dropdownSelectButton");
    if (div) {
      const rect = div.getBoundingClientRect();

      const space = 10;

      setPosition({
        left: rect.right,
        right: rect.right,
        top: rect.top - div.offsetTop + space,
      });

      setIsVisible(true);
      if (isVisible) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
  };

  // show dropdown
  useEffect(() => {
    console.log("DropdownOptions", dropdownProperties);
  }, [dropdownProperties]);

  useEffect(() => {
    setShowLoading(false);
  }, [stopLoading]);

  const showOption = (optionId) => {
    if (optionId) {
      const div = document.getElementById(optionId);
      div.dataset.option = "show";
    }
  };

  const hideOption = (optionId) => {
    if (optionId) {
      const div = document.getElementById(optionId);
      div.dataset.option = "hide";
    }
  };

  const hideOptions = () => {
    setIsVisible(false);
  };

  const wrapperRef = useRef(null);
  useOnClickOutside(wrapperRef, () => hideOptions());

  const [inputValue, setInputValue] = useState(100);

  return (
    <div
      id="dropDownComponent"
      style={{
        // display: isVisible ? 'flex' : 'none',
        display: "none",
        // position: 'fixed',
        // left: `${position.left}px`,
        // left: `${position.left}px`,
        // bottom: `${position.top}px`,
        zIndex: 30,
      }}
      className={styles.options}
    >
      <div className={styles.explationInfo}>
        <CiCircleInfo className={styles.iconBigger} />
        <div className={styles.info} style={{ marginLeft: "10px" }}>
          {info}
        </div>
      </div>

      {options.map((item, index) => {
        const optionId = "optionInfo" + index;

        return (
          <div
            onClick={() => {
              setShowLoading(true);
              setIsVisible(false);
              sendOption(item);
            }}
            className={styles.optionDiv}
            key={index}
          >
            <FiDownload
              className={styles.icon}
              style={{ marginRight: "10px" }}
            />

            <div className={styles.option}>
              {`${item}x${item} ${wordAfterEachOption}`}
            </div>

            {/* <div onMouseOver={() => showOption(optionId)} onMouseOut={() => hideOption(optionId)} className={styles.infoIcon}>
                                <CiCircleInfo size={20}/>
                            </div> */}

            {index === recommendedIndex && (
              <div className={styles.recommended}>{"Recommended"}</div>
            )}
            <div>
              {/* <div  id={optionId} className={styles.optionInfo} data-option={"hide"}>
                                    {info}
                                </div> */}
            </div>
          </div>
        );
      })}

      {!custom && (
        <div
          style={{ backgroundColor: "var(--background)", cursor: "text" }}
          className={styles.optionDiv}
        >
          {"Custom size"}
          <InputComponent onType={(value) => setInputValue(value)} />
          {` x ${inputValue}`}

          <div
            //  onMouseOver={handleMouseClick}
            onClick={() => {
              setShowLoading(true);
              setIsVisible(false);
              sendOption(inputValue);
            }}
            className={styles.customChooseButton}
          >
            {/* {custom} */}
            Put custom
          </div>
        </div>
      )}
    </div>
  );
}

const InputComponent = ({ onType = null }) => {
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState(100);
  const [update, setUpdate] = useState(false);

  const focusInput = () => {
    if (inputRef.current) {
      // Focus the input elementf
      inputRef.current.focus();

      // Get the input element
      const input = inputRef.current;

      // refresh input
      input.value = 0;
      setUpdate((it) => !it);
      // setInputValue(100)

      // input.type = 'text';

      // Set the selection range to start from the end of the word

      // const word = inputValue; // Replace 'YourWord' with the actual word
      // const startIndex = input.value.lastIndexOf(word);
      // const endIndex = startIndex + word.length;

      // input.setSelectionRange(endIndex, endIndex);
      // input.focus();
      // input.type = 'number';
    }
  };

  const onChange = (value) => {
    if (onType && value.length <= 3 && value !== 0 && value !== "0") {
      console.log("value: ", typeof value);
      setInputValue(value);
      onType(value);
      if (value.length < 1) {
        onType(1);
      }
    }
  };

  const onBlur = () => {
    if (inputValue.length < 1) {
      setInputValue(1);
    }
  };

  return (
    <div onClick={focusInput} className={styles.customSizeInput}>
      <input
        contentEditable={true}
        id={"inputId"}
        type="number"
        maxLength={3}
        ref={inputRef}
        value={inputValue}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};
