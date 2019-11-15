import React, { useContext } from "react";
import { KeyContext } from "../../contexts/KeyContext";

export default function KeyButton(props) {
  const { key, setKey } = useContext(KeyContext);
  const defaultStyles =
    "flex justify-center items-center m-2 w-16 h-16 bg-purple-200 cursor-pointer rounded";
  return (
    <li
      className={
        key === props.value
          ? defaultStyles + " bg-purple-700 text-white"
          : defaultStyles + " hover:bg-purple-400"
      }
      onClick={() => setKey(props.value)}
    >
      {props.children}
    </li>
  );
}
