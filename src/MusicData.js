export const notesLookup = {
  c: {
    major: ["C", "D", "E", "F", "G", "A", "B"],
    natural_minor: ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
    harmonic_minor: ["C", "D", "Eb", "F", "G", "Ab", "B"]
  },
  g: {
    major: ["G", "A", "B", "C", "D", "E", "F#"],
    natural_minor: ["G", "A", "Bb", "C", "D", "Eb", "F", "G"],
    harmonic_minor: ["G", "A", "Bb", "C", "D", "Eb", "F#"]
  },
  d: {
    major: ["D", "E", "F#", "G", "A", "B", "C#"],
    natural_minor: ["D", "E", "F", "G", "A", "Bb", "C", "D"],
    harmonic_minor: ["D", "E", "F", "G", "A", "Bb", "C#"]
  },
  a: {
    major: ["A", "B", "C#", "D", "E", "F#", "G#"],
    natural_minor: ["A", "B", "C", "D", "E", "F", "G", "A"],
    harmonic_minor: ["A", "B", "C", "D", "E", "F", "G#"]
  },
  e: {
    major: ["E", "F#", "G#", "A", "B", "C#", "D#"],
    natural_minor: ["E", "F#", "G", "A", "B", "C", "D", "E"],
    harmonic_minor: ["E", "F#", "G", "A", "B", "C", "D#"]
  },
  b: {
    major: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
    natural_minor: ["B", "C#", "D", "E", "F#", "G", "A", "B"],
    harmonic_minor: ["B", "C#", "D", "E", "F#", "G", "A#"]
  },
  f_sharp: {
    major: ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
    natural_minor: ["F#", "G#", "A", "B", "C#", "D", "E", "F#"],
    harmonic_minor: ["F#", "G#", "A", "B", "C#", "D", "E#"]
  },
  d_flat: {
    major: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
    natural_minor: ["C#", "D#", "E", "F#", "G#", "A", "B", "C#"],
    harmonic_minor: ["Db", "Eb", "Fb", "Gb", "Ab", "Bbb", "C"]
  },
  a_flat: {
    major: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
    natural_minor: ["G#", "A#", "B", "C#", "D#", "E", "F#", "G#"],
    harmonic_minor: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "G"]
  },
  e_flat: {
    major: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
    natural_minor: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db", "Eb"],
    harmonic_minor: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "D"]
  },
  b_flat: {
    major: ["Bb", "C", "D", "Eb", "F", "G", "A"],
    natural_minor: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab", "Bb"],
    harmonic_minor: ["Bb", "C", "Db", "Eb", "F", "Gb", "A"]
  },
  f: {
    major: ["F", "G", "A", "Bb", "C", "D", "E"],
    natural_minor: ["F", "G", "Ab", "Bb", "C", "Db", "Eb", "F"],
    harmonic_minor: ["F", "G", "Ab", "Bb", "C", "Db", "E"]
  }
};
export const chordsLookup = {
  major: {
    triad: ["", "m", "m", "", "", "m", "dim"],
    tetrad: ["maj7", "m7", "m7", "maj7", "7", "m7", "m7(b5)"]
  },
  natural_minor: {
    triad: ["m", "dim", "", "m", "m", "", ""],
    tetrad: ["min7", "m7(b5)", "maj7", "min7", "min7", "maj7", "7"]
  },
  harmonic_minor: {
    triad: ["m", "dim", "aug", "m", "", "", "dim"],
    tetrad: ["m/M7", "m7(b5)", "augM7", "min7", "7", "maj7", "dim7"]
  }
};

export const keyLookup = {
  a: "A",
  b_flat: "Bb",
  b: "B",
  c: "C",
  d_flat: "Db",
  d: "D",
  e_flat: "Eb",
  e: "E",
  f: "F",
  f_sharp: "F#",
  g: "G",
  a_flat: "Ab"
};

export const keyTypeLookup = {
  major: "Major",
  natural_minor: "Natural Minor",
  harmonic_minor: "Harmonic Minor"
};

export const chordTypeLookup = {
  triad: "Triads",
  tetrad: "7th Chords"
};
