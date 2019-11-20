import React, { useContext } from "react";
import { KeyContext } from "../../contexts/KeyContext";

export default function KeyButton(props) {
  const { key, setKey } = useContext(KeyContext);
  const defaultStyles =
    "flex text-2xl justify-center items-center m-2 w-16 h-16 cursor-pointer rounded";
  return (
    <div
      className={
        key === props.value
          ? defaultStyles +
            " bg-gray-200 text-gray-800 font-bold border-2 border-yellow-400"
          : defaultStyles +
            " hover:bg-blue-800 bg-blue-600 text-white border-2 border-gray-800 p-2"
      }
      onClick={() => setKey(props.value)}
    >
      {props.children}
    </div>
  );
}
