import React, { useContext } from "react";
import { KeyContext } from "../contexts/KeyContext";

export default function Key() {
  const { key, setKey } = useContext(KeyContext);
  //console.log("key", key);
  return (
    <div>
      <label>
        Choose Key:
        <select value={key} onChange={e => setKey(e.target.value)}>
          <option value="c">C</option>
          <option value="d_flat">D♭</option>
          <option value="d">D</option>
          <option value="e_flat">E♭</option>
          <option value="e">E</option>
          <option value="f">F</option>
          <option value="f_sharp">F♯</option>
          <option value="g">G</option>
          <option value="a_flat">A♭</option>
          <option value="a">A</option>
          <option value="b_flat">B♭</option>
          <option value="b">B</option>
        </select>
      </label>
    </div>
  );
}
