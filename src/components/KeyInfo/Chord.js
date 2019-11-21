import React, { useContext } from "react";
import { KeyContext } from "../../contexts/KeyContext";
import { KeyTypeContext } from "../../contexts/KeyTypeContext";
import { ChordTypeContext } from "../../contexts/ChordTypeContext";
import { notesLookup, chordsLookup } from "../../MusicData";

export default function Chord(props) {
  // Get selected key, key type, and chord type from context (e.g. C, Major, Triads)
  const { key } = useContext(KeyContext);
  const { chordType } = useContext(ChordTypeContext);
  const { keyType } = useContext(KeyTypeContext);

  // Get notes from music data file for this key and key type
  const notes = notesLookup[key][keyType];

  // Grab set of chords that appear in this key type with triads or 7ths
  // E.g. Major Triads could have (Major, Minor, Minor, Major, Major, Minor, Diminished)
  // Though for display purposes the array looks like this: ["", "m", "m", "", "", "m", "°"]
  const chords = chordsLookup[keyType][chordType];

  // Calculate the notes in this chord based on the scale position the chord starts on.
  // The mods are needed to start over at the beginning of the note array if it gets to the end.
  // Only need fourth note if seventh chords are selected
  const chordNote1 = notes[props.number - 1];
  const chordNote2 = notes[(props.number + 1) % 7];
  const chordNote3 = notes[(props.number + 3) % 7];
  const chordNote4 =
    chordType == "seventh" ? notes[(props.number + 5) % 7] : "";
  const chordString =
    chordNote1 + " " + chordNote2 + " " + chordNote3 + " " + chordNote4;

  return (
    <div
      className="flex flex-grow flex-col justify-center items-center 
      m-2 p-2 border-2 bg-gray-200 border-gray-800 rounded"
    >
      <div className="text-md">{props.number}</div>
      <div className="text-3xl">
        {notes[props.number - 1] + chords[props.number - 1]}
      </div>
      <div>{chordString}</div>
    </div>
  );
}
