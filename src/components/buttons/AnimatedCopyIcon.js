import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import styles from "./styles/copyButton.module.css";

export default function AnimatedCopyIcon({ checkMark, style }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (checkMark) {
      setShow(true);
      setTimeout(() => {
        // Code to be executed after the specified delay
        setShow(false);
      }, 1500);
    }
  }, [checkMark]);

  return (
    <>
      {show ? (
        <>
          {" "}
          Copied <IoCopyOutline style={style} size={20} />{" "}
        </>
      ) : (
        <IoCopyOutline style={style} size={20} />
      )}
    </>
  );
}
