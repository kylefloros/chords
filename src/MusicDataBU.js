export const notesLookup = {
  a: {
    major: ["A", "B", "C#", "D", "E", "F#", "G#"],
    natural_minor: ["A", "B", "C", "D", "E", "F", "G"],
    harmonic_minor: ["A", "B", "C", "D", "E", "F", "G#"]
  },
  a_sharp: {
    major: ["A#", "B#", "C##", "D#", "E#", "F##", "G##"],
    natural_minor: ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
    harmonic_minor: ["A#", "B#", "C#", "D#", "E#", "F#", "G##"]
  },
  b_flat: {
    major: ["Bb", "C", "D", "Eb", "F", "G", "A"],
    natural_minor: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
    harmonic_minor: ["Bb", "C", "Db", "Eb", "F", "Gb", "A"]
  },
  b: {
    major: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
    natural_minor: ["B", "C#", "D", "E", "F#", "G", "A"],
    harmonic_minor: ["B", "C#", "D", "E", "F#", "G", "A#"]
  },
  c_flat: {
    major: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
    natural_minor: ["Cb", "Db", "Ebb", "Fb", "Gb", "Abb", "Bbb"],
    harmonic_minor: ["Cb", "Db", "Ebb", "Fb", "Gb", "Abb", "Bb"]
  },
  c: {
    major: ["C", "D", "E", "F", "G", "A", "B"],
    natural_minor: ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
    harmonic_minor: ["C", "D", "Eb", "F", "G", "Ab", "B"]
  },
  c_sharp: {
    major: ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
    natural_minor: ["C#", "D#", "E", "F#", "G#", "A", "B"],
    harmonic_minor: ["C#", "D#", "E", "F#", "G#", "A", "B#"]
  },
  d_flat: {
    major: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
    natural_minor: ["Db", "Eb", "Fb", "Gb", "Ab", "Bbb", "Cb"],
    harmonic_minor: ["Db", "Eb", "Fb", "Gb", "Ab", "Bbb", "C"]
  },
  d: {
    major: ["D", "E", "F#", "G", "A", "B", "C#"],
    natural_minor: ["D", "E", "F", "G", "A", "Bb", "C"],
    harmonic_minor: ["D", "E", "F", "G", "A", "Bb", "C#"]
  },
  d_sharp: {
    major: ["D#", "E#", "F##", "G#", "A#", "B#", "C##"],
    natural_minor: ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
    harmonic_minor: ["D#", "E#", "F#", "G#", "A#", "B", "C##"]
  },
  e_flat: {
    major: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
    natural_minor: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
    harmonic_minor: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "D"]
  },
  e: {
    major: ["E", "F#", "G#", "A", "B", "C#", "D#"],
    natural_minor: ["E", "F#", "G", "A", "B", "C", "D"],
    harmonic_minor: ["E", "F#", "G", "A", "B", "C", "D#"]
  },
  f: {
    major: ["F", "G", "A", "Bb", "C", "D", "E"],
    natural_minor: ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
    harmonic_minor: ["F", "G", "Ab", "Bb", "C", "Db", "E"]
  },
  f_sharp: {
    major: ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
    natural_minor: ["F#", "G#", "A", "B", "C#", "D", "E"],
    harmonic_minor: ["F#", "G#", "A", "B", "C#", "D", "E#"]
  },
  g_flat: {
    major: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
    natural_minor: ["Gb", "Ab", "Bbb", "Cb", "Db", "Ebb", "Fb"],
    harmonic_minor: ["Gb", "Ab", "Bbb", "Cb", "Db", "Ebb", "F"]
  },
  g: {
    major: ["G", "A", "B", "C", "D", "E", "F#"],
    natural_minor: ["G", "A", "Bb", "C", "D", "Eb", "F"],
    harmonic_minor: ["G", "A", "Bb", "C", "D", "Eb", "F#"]
  },
  g_sharp: {
    major: ["G#", "A#", "B#", "C#", "D#", "E#", "F##"],
    natural_minor: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
    harmonic_minor: ["G#", "A#", "B", "C#", "D#", "E", "F##"]
  },
  a_flat: {
    major: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
    natural_minor: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"],
    harmonic_minor: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "G"]
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
  a_sharp: "A#",
  b_flat: "Bb",
  b: "B",
  c_flat: "Cb",
  c: "C",
  c_sharp: "C#",
  d_flat: "Db",
  d: "D",
  d_sharp: "D#",
  e_flat: "Eb",
  e: "E",
  f: "F",
  f_sharp: "F#",
  g_flat: "Gb",
  g: "G",
  g_sharp: "G#",
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
