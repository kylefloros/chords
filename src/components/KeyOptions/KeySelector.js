import React from "react";
import KeyButton from "./KeyButton";

export default function Key() {
  return (
    <ul className="flex w-full flex-wrap justify-center mb-6 mt-4 md:mt-8">
      <KeyButton value="a">A</KeyButton>
      <KeyButton value="b_flat">Bb</KeyButton>
      <KeyButton value="b">B</KeyButton>
      <KeyButton value="c">C</KeyButton>
      <KeyButton value="d_flat">Db</KeyButton>
      <KeyButton value="d">D</KeyButton>
      <KeyButton value="e_flat">Eb</KeyButton>
      <KeyButton value="e">E</KeyButton>
      <KeyButton value="f">F</KeyButton>
      <KeyButton value="f_sharp">F#</KeyButton>
      <KeyButton value="g">G</KeyButton>
      <KeyButton value="a_flat">Ab</KeyButton>
    </ul>
  );
}
