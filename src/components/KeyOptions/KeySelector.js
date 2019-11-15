import React from "react";
import KeyButton from "./KeyButton";

export default function Key() {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="text-gray-800 my-2">Select a key</div>
      <ul>
        <div className="flex">
          <KeyButton value="a">A</KeyButton>
          <KeyButton value="b_flat">B♭</KeyButton>
          <KeyButton value="b">B</KeyButton>
          <KeyButton value="c">C</KeyButton>
          <KeyButton value="d_flat">D♭</KeyButton>
          <KeyButton value="d">D</KeyButton>
        </div>
        <div className="flex">
          <KeyButton value="e_flat">E♭</KeyButton>
          <KeyButton value="e">E</KeyButton>
          <KeyButton value="f">F</KeyButton>
          <KeyButton value="f_sharp">F♯</KeyButton>
          <KeyButton value="g">G</KeyButton>
          <KeyButton value="a_flat">A♭</KeyButton>
        </div>
      </ul>
    </div>
  );
}
