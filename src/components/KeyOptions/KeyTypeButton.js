import React, { useContext } from "react";
import { KeyTypeContext } from "../../contexts/KeyTypeContext";

export default function KeyButton(props) {
  const { keyType, setKeyType } = useContext(KeyTypeContext);
  const defaultStyles =
    "flex flex-grow justify-center items-center m-2 p-4 bg-teal-200 cursor-pointer rounded";
  return (
    <li
      className={
        keyType === props.value
          ? defaultStyles + " bg-teal-600 text-white"
          : defaultStyles + " hover:bg-teal-400"
      }
      onClick={() => setKeyType(props.value)}
    >
      {props.children}
    </li>
  );
}
