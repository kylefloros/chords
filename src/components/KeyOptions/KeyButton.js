import React, { useContext } from "react";
import { KeyContext } from "../../contexts/KeyContext";

export default function KeyButton(props) {
  const { key, setKey } = useContext(KeyContext);
  const defaultStyles =
    "flex text-white font-bold justify-center items-center m-2 w-16 h-16 bg-purple-600 cursor-pointer rounded";
  return (
    <li
      className={
        key === props.value
          ? defaultStyles + " bg-purple-800 border border-gray-700"
          : defaultStyles + " hover:bg-purple-700"
      }
      onClick={() => setKey(props.value)}
    >
      {props.children}
    </li>
  );
}
