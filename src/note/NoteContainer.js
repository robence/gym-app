import React from 'react';
import Note from './Note';
import notes from './data';

const NoteContainer = () => {
  const style = {
    backgroundColor: 'white',
    width: '100 px',
    height: '200 px',
  };

  return notes.map((note) => {
    return (
      <div style={style}>
        <Note note={note} />
      </div>
    );
  });
};

export default NoteContainer;
