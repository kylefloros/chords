import React from "react";

export default function Chord(props) {
  return (
    <div className="mx-2 bg-indigo-200 rounded p-2 flex flex-col justify-center items-center">
      <div className="text-md">{props.number}</div>
      <div className="mx-4 text-2xl">{props.chord}</div>
    </div>
  );
}
