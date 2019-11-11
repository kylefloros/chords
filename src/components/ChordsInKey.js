import React, { useContext, useState, useEffect } from "react";
import { KeyContext } from "../contexts/KeyContext";
import { KeyTypeContext } from "../contexts/KeyTypeContext";
import { ChordTypeContext } from "../contexts/ChordTypeContext";

export default function ChordsInKey() {
  const { key } = useContext(KeyContext);
  const { chordType } = useContext(ChordTypeContext);
  const { keyType } = useContext(KeyTypeContext);
  const notes = [
    ["Aflat", "A", "Asharp"],
    ["Bflat", "B"],
    ["C", "Csharp"],
    ["Dflat", "D", "Dsharp"],
    ["Eflat", "E"],
    ["F", "Fsharp"],
    ["Gflat", "G", "Gsharp"]
  ];

  const [chordsInKey, setChordsInKey] = useState([]);

  useEffect(() => {
    const startingIndex = notes.indexOf(key);
    let chords = [];
    if (keyType === "major") {
      chords[0] = notes[startingIndex];
      chords[1] = notes[startingIndex + 2] + "m";
      chords[2] = notes[startingIndex + 4] + "m";
      chords[3] = notes[startingIndex + 5];
      chords[4] = notes[startingIndex + 7];
      chords[5] = notes[startingIndex + 9] + "m";
      chords[6] = notes[startingIndex + 11] + "\u00b0";
    } else {
      chords[0] = notes[startingIndex];
      chords[1] = notes[startingIndex + 2];
      chords[2] = notes[startingIndex + 3];
      chords[3] = notes[startingIndex + 5];
      chords[4] = notes[startingIndex + 7];
      chords[5] = notes[startingIndex + 8];
      chords[6] = notes[startingIndex + 10];
    }
    setChordsInKey(chords);
  }, [key, chordType, keyType]);

  return (
    <div>
      {chordsInKey.map(chord => (
        <span className="px-2">{chord}</span>
      ))}
    </div>
  );
}
