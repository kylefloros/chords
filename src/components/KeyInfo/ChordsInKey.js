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
      {notes.length === 1 ? (
        <>
          <div className="font-bold text-xl sm:text-2xl md:text-4xl text-gray-800 mt-16 text-gray-800 h-16">
            {notes[0]}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-wrap w-full mt-4 ">
            <Chord
              number={1}
              chords={chords}
              notes={notes}
              chordType={chordType}
            ></Chord>
            <Chord
              number={2}
              chords={chords}
              notes={notes}
              chordType={chordType}
            ></Chord>
            <Chord
              number={3}
              chords={chords}
              notes={notes}
              chordType={chordType}
            ></Chord>
            <Chord
              number={4}
              chords={chords}
              notes={notes}
              chordType={chordType}
            ></Chord>
            <Chord
              number={5}
              chords={chords}
              notes={notes}
              chordType={chordType}
            ></Chord>
            <Chord
              number={6}
              chords={chords}
              notes={notes}
              chordType={chordType}
            ></Chord>
            <Chord
              number={7}
              chords={chords}
              notes={notes}
              chordType={chordType}
            ></Chord>
          </div>
        </>
      )}
    </div>
  );
}
