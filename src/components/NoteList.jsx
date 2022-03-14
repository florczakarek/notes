import React from 'react';
import SingleNote from './SingleNote';
import styles from './NoteList.module.css';

const NoteList = ({ noteList, onDelete }) => {
  // const navigate = useNavigate();

  const sortedNotes = noteList.sort(
    (note1, note2) =>
      new Date(note2.lastModified) - new Date(note1.lastModified)
  );

  return (
    <ul className={styles.container}>
      {sortedNotes.map((note) => {
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
