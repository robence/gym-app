import React, { useState } from 'react';

import Note from './Note';
import data from './data';

const NoteContainer = () => {
  const style = {
    width: '100 vw',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '10px',
  };

  const initialNotes = data.map((note, i) => {
    return { ...note, id: i, editable: false };
  });
  const [notes, setNotes] = useState(initialNotes);

  const getCardId = (e) => {
    if (e.target.classList.contains('container')) {
      return -1;
    }
    if (e.target.classList.contains('card')) {
      return Number(e.target.id);
    }
    if (e.target.parentElement.classList.contains('card')) {
      return Number(e.target.parentElement.id);
    }
    return '';
  };

  const handleClick = (e) => {
    setNotes(
      notes.map((note) => {
        return { ...note, editable: Number(note.id) === getCardId(e) };
      }),
    );
  };

  return (
    <div className="container" style={style} onClick={handleClick}>
      {notes.map((note, i) => (
        <Note key={i} note={note} />
      ))}
    </div>
  );
};

export default NoteContainer;
