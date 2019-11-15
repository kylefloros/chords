import React, { useContext } from "react";
import { KeyContext } from "../../contexts/KeyContext";
import { KeyTypeContext } from "../../contexts/KeyTypeContext";
import { ChordTypeContext } from "../../contexts/ChordTypeContext";
import Chord from "./Chord";
import {
  notesLookup,
  chordsLookup,
  keyLookup,
  keyTypeLookup,
  chordTypeLookup
} from "../../MusicData";

export default function ChordsInKey() {
  const { key } = useContext(KeyContext);
  const { chordType } = useContext(ChordTypeContext);
  const { keyType } = useContext(KeyTypeContext);
  const notes = notesLookup[key][keyType];
  const chords = chordsLookup[keyType][chordType];
  const displayKey = keyLookup[key];
  const formattedKeyType = keyTypeLookup[keyType];
  const formattedChordType = chordTypeLookup[chordType];
  console.log(keyType, chords);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center text-gray-800 my-2">
        <div className="text-lg">Diatonic {formattedChordType} in </div>
        <div className="font-bold text-5xl mt-1 mb-3">
          {displayKey + " " + formattedKeyType}
        </div>
      </div>
      <div className="flex justify-around">
        <Chord number="1" chord={notes[0] + chords[0]}></Chord>
        <Chord number="2" chord={notes[1] + chords[1]}></Chord>
        <Chord number="3" chord={notes[2] + chords[2]}></Chord>
        <Chord number="4" chord={notes[3] + chords[3]}></Chord>
        <Chord number="5" chord={notes[4] + chords[4]}></Chord>
        <Chord number="6" chord={notes[5] + chords[5]}></Chord>
        <Chord number="7" chord={notes[6] + chords[6]}></Chord>
      </div>
    </div>
  );
}
