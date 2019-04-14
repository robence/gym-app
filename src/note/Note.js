import React, { useEffect } from 'react';
import { style } from 'glamor';

const Note = ({ note }) => {
  const styleP = style({
    backgroundColor: 'white',
    width: '100 px',
    minWidth: '150px',
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

  useEffect(() => {});
  // setInterval(() => {
  //   if (note.title) {
  //     console.log(note.editable);
  //   }
  // }, 1000);

  return (
    <div id={note.id} className="card" {...styleP}>
      <h1>{note.title}</h1>
      <p>{note.name}</p>
      <p>{note.editable ? 'Editable' : 'Not Editable'}</p>
    </div>
  );
};

export default Note;
