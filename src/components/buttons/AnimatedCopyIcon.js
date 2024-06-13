import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoCopy } from "react-icons/io5";
import styles from "./styles/animatedCopyIcon.module.css";

export default function AnimatedCopyIcon({
  childrenBefore,
  childrenAfter,
  checkMark,
  className,
  style,
  iconStyle,
  iconSize = 20,
  onClick,
  onIconClick,
  showCopiedWordOnClick = false,
  coppiedClassName,
}) {
  const [show, setShow] = useState(false);

  // useEffect(() => {

  // }, [checkMark]);

  const onComponentClick = () => {
    onClick();
    setShow(true);
    setTimeout(() => {
      // Code to be executed after the specified delay
      setShow(false);
    }, 1500);
  };

  return (
    <div onClick={onComponentClick} className={className} style={style}>
      {childrenBefore}

      {show ? (
        <>
          <IoCheckmarkDoneSharp
            style={{ marginRight: "5px" }}
            size={iconSize}
          />

          {showCopiedWordOnClick ? (
            <div
              className={coppiedClassName ? coppiedClassName : styles.coppied}
            >
              Copied
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <IoCopy style={{ marginRight: "5px" }} size={iconSize} />
      )}

      {!show && showCopiedWordOnClick && childrenAfter}
    </div>
  );
}
