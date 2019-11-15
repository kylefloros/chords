import React, { useContext } from "react";
import { ChordTypeContext } from "../../contexts/ChordTypeContext";

export default function KeyButton(props) {
  const { chordType, setChordType } = useContext(ChordTypeContext);

  const defaultStyles =
    "flex font-bold flex-grow justify-center items-center m-2 p-4 bg-teal-200 cursor-pointer rounded";
  return (
    <li
      className={
        chordType === props.value
          ? defaultStyles + " bg-teal-500 text-white border border-gray-600"
          : defaultStyles + " hover:bg-teal-300"
      }
      onClick={() => setChordType(props.value)}
    >
      {props.children}
    </li>
  );
}