import React from 'react';
import NoteContainer from './note/NoteContainer';

const Dashboard = () => {
  const style = {
    width: '100 vw',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '10px',
  };

  return (
    <div style={style}>
      <NoteContainer />
    </div>
  );
};
export default Dashboard;
