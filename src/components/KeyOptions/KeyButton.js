import React, { useContext } from "react";
import { KeyContext } from "../../contexts/KeyContext";

export default function KeyButton(props) {
  const { key, setKey } = useContext(KeyContext);
  const defaultStyles =
    " border-gray-700 border-2 shadow-md flex text-white font-bold justify-center items-center m-2 w-16 h-16 cursor-pointer rounded ";
  return (
    <li
      className={
        key === props.value
          ? defaultStyles + " bg-indigo-500 border-gray-700 border-2"
          : defaultStyles + " hover:bg-purple-600 bg-purple-800"
      }
      onClick={() => setKey(props.value)}
    >
      {props.children}
    </li>
  );
}
