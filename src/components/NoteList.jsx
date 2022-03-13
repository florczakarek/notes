import React from 'react';
import SingleNote from './SingleNote';

const NoteList = ({ noteList, onDelete }) => {
  // const navigate = useNavigate();

  return (
    <ul className='notes-container'>
      {noteList.map((note) => {
        const { id, title, markdown, lastModified } = note;
        return (
          <SingleNote
            key={id}
            id={id}
            title={title}
            markdown={markdown}
            lastModified={lastModified}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

export default NoteList;
