import React from 'react';
import { style } from 'glamor';

import Note from './Note';
import notes from './data';

const NoteContainer = () => {
  const styleP = style({
    backgroundColor: 'white',
    width: '100 px',
    maxWidth: '25%',
    height: '200 px',
    margin: '20px',
    padding: '10px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    ':hover': {
      boxShadow: '0 16px 32px 0 rgba(0,0,0,0.2)',
      transform: 'scale(1.2)',
    },
  });

  const getNote = () => {
    return notes[Math.floor(Math.random() * notes.length)];
  };

  return notes.map(() => {
    return (
      <div {...styleP}>
        <Note note={getNote()} />
      </div>
    );
  });
};

export default NoteContainer;
