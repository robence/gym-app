import React from 'react';

const Note = ({ note }) => {
  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.name}</p>
    </div>
  );
};

export default Note;
