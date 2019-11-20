import React, { useContext } from "react";
import { KeyTypeContext } from "../../contexts/KeyTypeContext";

export default function KeyButton(props) {
  const { keyType, setKeyType } = useContext(KeyTypeContext);
  const defaultStyles =
    "text-2xl border-gray-700 border-2 shadow-md flex flex-grow justify-center items-center m-2 p-3 cursor-pointer rounded";
  return (
    <li
      className={
        keyType === props.value
          ? defaultStyles +
            " bg-gray-200 text-gray-800 font-bold border-2 border-yellow-400"
          : defaultStyles +
            " hover:bg-blue-800 bg-blue-600 text-white border-2 border-gray-800 p-2"
      }
      onClick={() => setKeyType(props.value)}
    >
      {props.children}
    </li>
  );
}
