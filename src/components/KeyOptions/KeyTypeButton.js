import React, { useContext } from "react";
import { KeyTypeContext } from "../../contexts/KeyTypeContext";

export default function KeyButton(props) {
  const { keyType, setKeyType } = useContext(KeyTypeContext);
  const defaultStyles =
    "flex font-bold flex-grow justify-center items-center m-2 p-4 bg-purple-200 cursor-pointer rounded";
  return (
    <li
      className={
        keyType === props.value
          ? defaultStyles + " bg-purple-500 text-white border border-gray-600"
          : defaultStyles + " hover:bg-purple-300"
      }
      onClick={() => setKeyType(props.value)}
    >
      {props.children}
    </li>
  );
}
