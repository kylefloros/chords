import React, { useContext, useState, useEffect } from "react";
import { KeyContext } from "../contexts/KeyContext";
import { KeyTypeContext } from "../contexts/KeyTypeContext";
import { ChordTypeContext } from "../contexts/ChordTypeContext";
import { notesLookup, chordsLookup } from "./Notes";

export default function ChordsInKey() {
  const { key } = useContext(KeyContext);
  const { chordType } = useContext(ChordTypeContext);
  const { keyType } = useContext(KeyTypeContext);
  const notes = notesLookup[key];
  const chords = chordsLookup[keyType][chordType];
  console.log(chords);

  console.log(keyType, chordType);
  return (
    <div>
      <span className="mx-4">{notes[0] + chords[0]}</span>
      <span className="mx-4">{notes[1] + chords[1]}</span>
      <span className="mx-4">{notes[2] + chords[2]}</span>
      <span className="mx-4">{notes[3] + chords[3]}</span>
      <span className="mx-4">{notes[4] + chords[4]}</span>
      <span className="mx-4">{notes[5] + chords[5]}</span>
      <span className="mx-4">{notes[6] + chords[6]}</span>
    </div>
  );
}
