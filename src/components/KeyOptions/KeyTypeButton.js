import React, { useContext } from "react";
import { KeyTypeContext } from "../../contexts/KeyTypeContext";

export default function KeyButton(props) {
  const { keyType, setKeyType } = useContext(KeyTypeContext);
  const defaultStyles =
    "flex text-white font-bold flex-grow justify-center items-center m-2 p-4 cursor-pointer rounded";
  return (
    <li
      className={
        keyType === props.value
          ? defaultStyles + " bg-indigo-500 border-gray-700 border-2"
          : defaultStyles + " hover:bg-purple-700 bg-purple-800"
      }
      onClick={() => setKeyType(props.value)}
    >
      {props.children}
    </li>
  );
}
