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
    <div className="flex flex-col items-center w-full sm:mt-2">
      <div className="font-bold text-xl sm:text-2xl md:text-4xl text-gray-800 mt-4">
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
              number={2}
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
