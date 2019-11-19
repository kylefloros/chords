import React from "react";
import KeyButton from "./KeyButton";

const enharmWrapper = "flex border-2 border-gray-500 rounded m-2";

export default function Key() {
  return (
    <ul className="flex w-11/12 flex-wrap justify-center mb-6 mt-4 md:mt-8">
      <div className={enharmWrapper}>
        <KeyButton value="a">A</KeyButton>
      </div>
      <div className={enharmWrapper}>
        <KeyButton value="a_sharp">A#</KeyButton>
        <KeyButton value="b_flat">Bb</KeyButton>
      </div>
      <div className={enharmWrapper}>
        <KeyButton value="b">B</KeyButton>
        <KeyButton value="c_flat">Cb</KeyButton>
      </div>
      <div className={enharmWrapper}>
        <KeyButton value="c">C</KeyButton>
      </div>
      <div className={enharmWrapper}>
        <KeyButton value="c_sharp">C#</KeyButton>
        <KeyButton value="d_flat">Db</KeyButton>
      </div>
      <div className={enharmWrapper}>
        <KeyButton value="d">D</KeyButton>
      </div>
      <div className={enharmWrapper}>
        <KeyButton value="d_sharp">D#</KeyButton>
        <KeyButton value="e_flat">Eb</KeyButton>
      </div>
      <div className={enharmWrapper}>
        <KeyButton value="e">E</KeyButton>
      </div>
      <div className={enharmWrapper}>
        <KeyButton value="f">F</KeyButton>
      </div>
      <div className={enharmWrapper}>
        <KeyButton value="f_sharp">F#</KeyButton>
        <KeyButton value="g_flat">Gb</KeyButton>
      </div>
      <div className={enharmWrapper}>
        <KeyButton value="g">G</KeyButton>
      </div>
      <div className={enharmWrapper}>
        <KeyButton value="g_sharp">G#</KeyButton>
        <KeyButton value="a_flat">Ab</KeyButton>
      </div>
    </ul>
  );
}
