import React, { useContext } from "react";
import { ChordTypeContext } from "../../contexts/ChordTypeContext";

export default function KeyButton(props) {
  const { chordType, setChordType } = useContext(ChordTypeContext);

  const defaultStyles =
    "flex text-white font-bold flex-grow justify-center items-center m-2 p-4 bg-purple-600 cursor-pointer rounded";
  return (
    <li
      className={
        chordType === props.value
          ? defaultStyles + " bg-purple-800 border border-gray-600"
          : defaultStyles + " hover:bg-purple-700"
      }
      onClick={() => setChordType(props.value)}
    >
      {props.children}
    </li>
  );
}
