import React from "react";

export default function Chord(props) {
  const firstNote = props.notes[props.number - 1];
  const secondNote = props.notes[(props.number + 1) % 7];
  const thirdNote = props.notes[(props.number + 3) % 7];

  const fourthNote =
    props.chordType == "tetrad" ? props.notes[(props.number + 5) % 7] : "";
  return (
    <div className="m-2 flex-grow bg-gray-200 rounded p-2 flex flex-col justify-center items-center">
      <div className="text-md">{props.number}</div>
      <div className="fmx-4 text-3xl">
        {props.notes[props.number - 1] + props.chords[props.number - 1]}
      </div>
      <div>
        {firstNote + " " + secondNote + " " + thirdNote + " " + fourthNote}
      </div>
    </div>
  );
}
