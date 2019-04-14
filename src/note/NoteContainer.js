import React, { useState } from 'react';

import Note from './Note';
import data from './data';

const NoteContainer = () => {
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
    const editableCardId = getCardId(e);
    console.log(editableCardId);

    const temp = notes.map((note) => {
      if (note.id === editableCardId) {
        console.log('runs');
      }
      return { ...note, editable: Number(note.id) === editableCardId };
    });

    setNotes(temp);

    console.log('editable cards size:');
    const x = notes.filter((note) => {
      return note.editable;
    });
    console.log(x[0]);
  };

  const style = {
    width: '100 vw',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '10px',
  };

  const getContent = () => notes.map((note, i) => <Note key={i} note={note} />);

  return (
    <div className="container" style={style} onClick={handleClick}>
      {getContent()}
    </div>
  );
};

export default NoteContainer;
