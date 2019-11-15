import React, { useContext } from "react";
import { KeyContext } from "../../contexts/KeyContext";

export default function KeyButton(props) {
  const { key, setKey } = useContext(KeyContext);
  const defaultStyles =
    "flex font-bold justify-center items-center m-2 w-16 h-16 bg-purple-200 cursor-pointer rounded";
  return (
    <li
      className={
        key === props.value
          ? defaultStyles + " bg-purple-500 text-white border border-gray-600"
          : defaultStyles + " hover:bg-purple-300"
      }
      onClick={() => setKey(props.value)}
    >
      {props.children}
    </li>
  );
}
