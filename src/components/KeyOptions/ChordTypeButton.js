import React, { useContext } from "react";
import { ChordTypeContext } from "../../contexts/ChordTypeContext";

export default function KeyButton(props) {
  const { chordType, setChordType } = useContext(ChordTypeContext);

  const defaultStyles =
    "border-gray-700 border-2 shadow-md flex text-2xl flex-grow justify-center items-center m-2 p-3 cursor-pointer rounded";

  const color = chordType === props.value ? "text-black " : " text-white";
  return (
    <li
      className={
        chordType === props.value
          ? defaultStyles +
            " bg-gray-200 text-gray-800 font-bold border-2 border-yellow-400"
          : defaultStyles +
            " hover:bg-blue-800 bg-blue-600 text-white border-2 border-gray-800 p-2"
      }
      onClick={() => setChordType(props.value)}
    >
      {props.children}
    </li>
  );
}
