import React from "react";

export default function Chord(props) {
  return (
    <div className="m-2 flex-grow bg-gray-200 rounded p-2 flex flex-col justify-center items-center">
      <div className="text-md">{props.number}</div>
      <div className="fmx-4 text-3xl">{props.chord}</div>
    </div>
  );
}
