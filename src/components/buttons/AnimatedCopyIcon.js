import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import styles from "./styles/copyButton.module.css";

export default function AnimatedCopyIcon({
  childrenBefore,
  childrenAfter,
  checkMark,
  className,
  style,
  iconStyle,
  onClick,
  onIconClick,
  showCopiedWordOnClick = false,
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
          <IoCheckmark style={{ ...iconStyle }} size={20} />

          {showCopiedWordOnClick ? "Copied" : ""}
        </>
      ) : (
        <IoCopyOutline onClick={onIconClick} style={iconStyle} size={20} />
      )}

      {!show && showCopiedWordOnClick && childrenAfter}
    </div>
  );
}
