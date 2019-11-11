import React, { useContext } from "react";
import { KeyContext } from "../contexts/KeyContext";

export default function Key() {
  const { key, setKey } = useContext(KeyContext);
  console.log("key", key);
  return (
    <div>
      <label>
        Choose Key:
        <select value={key} onChange={e => setKey(e.target.value)}>
          <option value="C">C</option>
          <option value="D♭">D♭</option>
          <option value="D">D</option>
          <option value="E♭">E♭</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="F♯">F♯/G♭</option>
          <option value="G">G</option>
          <option value="A♭">A♭</option>
          <option value="A">A</option>
          <option value="B♭">B♭</option>
          <option value="B">B</option>
        </select>
      </label>
    </div>
  );
}
