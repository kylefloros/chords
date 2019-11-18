import React, { useContext } from "react";
import { ChordTypeContext } from "../../contexts/ChordTypeContext";

export default function KeyButton(props) {
  const { chordType, setChordType } = useContext(ChordTypeContext);

  const defaultStyles =
    "border-gray-700 border-2 shadow-md flex text-white font-bold flex-grow justify-center items-center m-2 p-4 cursor-pointer rounded";
  return (
    <li
      className={
        chordType === props.value
          ? defaultStyles + " bg-indigo-500 border-gray-700"
          : defaultStyles + " hover:bg-purple-600 bg-purple-800"
      }
      onClick={() => setChordType(props.value)}
    >
      {props.children}
    </li>
  );
}
