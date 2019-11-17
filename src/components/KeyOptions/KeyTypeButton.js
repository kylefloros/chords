import React, { useContext } from "react";
import { KeyTypeContext } from "../../contexts/KeyTypeContext";

export default function KeyButton(props) {
  const { keyType, setKeyType } = useContext(KeyTypeContext);
  const defaultStyles =
    "flex text-white font-bold flex-grow justify-center items-center m-2 p-4 bg-purple-600 cursor-pointer rounded";
  return (
    <li
      className={
        keyType === props.value
          ? defaultStyles + " bg-purple-800 text-white border border-gray-600"
          : defaultStyles + " hover:bg-purple-700"
      }
      onClick={() => setKeyType(props.value)}
    >
      {props.children}
    </li>
  );
}
