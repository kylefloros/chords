import React, { useContext } from "react";
import { KeyContext } from "../../contexts/KeyContext";
import { KeyTypeContext } from "../../contexts/KeyTypeContext";
import { ChordTypeContext } from "../../contexts/ChordTypeContext";
import Chord from "./Chord";
import { keyLookup, keyTypeLookup, chordTypeLookup } from "../../MusicData";

export default function ChordsInKey() {
  // Get selected key, key type, and chord type from context (e.g. C, Major, Triads)
  const { key } = useContext(KeyContext);
  const { chordType } = useContext(ChordTypeContext);
  const { keyType } = useContext(KeyTypeContext);
  const displayKey = keyLookup[key];
  const formattedKeyType = keyTypeLookup[keyType];
  const formattedChordType = chordTypeLookup[chordType];

  return (
    <div className="flex flex-col items-center w-full mt-4 bg-blue-600 rounded p-4 shadow-2xl">
      <div className="font-bold text-xl sm:text-3xl md:text-4xl mt-4 bg-gray-200 rounded p-3 w-8/10 border-2 border-gray-800 text-gray-800 flex justify-center">
        {" " +
          displayKey +
          " " +
          formattedKeyType +
          " Diatonic " +
          formattedChordType}
      </div>
      <div className="flex flex-wrap w-full mt-4 ">
        <Chord number={1}></Chord>
        <Chord number={2}></Chord>
        <Chord number={3}></Chord>
        <Chord number={4}></Chord>
        <Chord number={5}></Chord>
        <Chord number={6}></Chord>
        <Chord number={7}></Chord>
      </div>
    </div>
  );
}
