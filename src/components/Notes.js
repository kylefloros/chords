import ChordType from "./ChordType";

export const notesLookup = {
  c: ["C", "D", "E", "F", "G", "A", "B"],
  g: ["G", "A", "B", "C", "D", "E", "F♯"],
  d: ["D", "E", "F♯", "G", "A", "B", "C♯"],
  a: ["A", "B", "C♯", "D", "E", "F♯", "G♯"],
  e: ["E", "F♯", "G♯", "A", "B", "C♯", "D♯"],
  b: ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯"],
  f_sharp: ["F♯", "G♯", "A♯", "B", "C♯", "D♯", "E♯"],
  d_flat: ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C"],
  a_flat: ["A♭", "B♭", "C", "D♭", "E♭", "F", "G"],
  e_flat: ["E♭", "F", "G", "A♭", "B♭", "C", "D"],
  b_flat: ["B♭", "C", "D", "E♭", "F", "G", "A"],
  f: ["F", "G", "A", "B♭", "C", "D", "E"]
};
export const chordsLookup = {
  major: {
    triad: ["", "m", "m", "", "", "m", "°"],
    tetrad: ["maj7", "m7", "m7", "maj7", "7", "m7", "m7(♭5)"]
  },
  minor: {
    triad: ["m", "°", "", "m", "m", "", ""],
    tetrad: ["min7", "m7(♭5)", "maj7", "7", "7", "maj7", "7"]
  }
};
