import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import NoteList from '../components/NoteList';
import styles from './Notes.module.css';

const Notes = ({ notes, setNotes }) => {
  const [title, setTitle] = useState('');
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAdd = (e) => {
    e.preventDefault();

    if (title && markdown) {
      const newNote = {
        id: uuid(),
        title,
        markdown,
        lastModified: new Date().toLocaleString('en-EN'),
      };
      setNotes([...notes, newNote]);
      setTitle('');
      setMarkdown('');
    }

    console.log(title, markdown);
  };

  const deleteNote = (idToDelete) => {
    const filteredNotes = notes.filter((note) => note.id !== idToDelete);
    console.log(filteredNotes);
    setNotes(filteredNotes);
  };

  const deleteAll = () => {
    setNotes([]);
  };

  return (
    <main className={styles.main}>
      <div className={styles['sidebar-form']}>
        <form className={styles.form} onSubmit={handleAdd}>
          <label htmlFor='title'>Let's create note</label>
          <input
            autoFocus
            value={title}
            className='input-title'
            id='title'
            type='text'
            placeholder='Your note title...'
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className='form-area'
            name=''
            cols='50'
            rows='10'
            placeholder='Description comes here...'
          />

          <button
            type='submit'
            className={`${
              title.length > 0 && markdown.length > 0
                ? 'btn-form'
                : 'btn-form disabled'
            }`}
          >
            Add note
          </button>
        </form>
      </div>
      <div className={styles.notes}>
        <h1>Latest notes</h1>
        {!notes || notes.length === 0 ? (
          <p>You have no items to display...</p>
        ) : (
          <NoteList noteList={notes} onDelete={deleteNote} />
        )}
      </div>
      {notes && notes.length > 0 && (
        <button onClick={deleteAll} className='note-btn delete-list'>
          Clear all notes
        </button>
      )}
    </main>
  );
};

export default Notes;
