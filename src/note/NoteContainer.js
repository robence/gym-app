import React from 'react';
import Note from './Note';
import notes from './data';

const NoteContainer = () => notes.map((note) => <Note note={note} />);

export default NoteContainer;
