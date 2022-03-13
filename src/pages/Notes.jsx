import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import NoteList from '../components/NoteList';

const Notes = ({ notes, setNotes }) => {
  const [title, setTitle] = useState('');
  const [markdown, setMarkodown] = useState('');

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem('notes'));
    setNotes(saveNotes);
  }, []);

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
        lastModified: new Date().toLocaleString('pl-PL'),
      };
      setNotes([...notes, newNote]);
      setTitle('');
      setMarkodown('');
    }

    console.log(title, markdown);
  };

  const deleteNote = (idToDelete) => {
    const filteredNotes = notes.filter((note) => note.id !== idToDelete);
    console.log(filteredNotes);
    setNotes(filteredNotes);
  };

  return (
    <main className='notes'>
      <div className='sidebar-notes'>
        {notes.length < 1 && <p>No items to display...</p>}
        {notes && <NoteList noteList={notes} onDelete={deleteNote} />}
      </div>
      <div className='sidebar-form'>
        <form className='form' onSubmit={handleAdd}>
          <label htmlFor='title'>Single Note Form</label>
          <input
            autoFocus
            value={title}
            className='input-form'
            id='title'
            type='text'
            placeholder='Your note title...'
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={markdown}
            onChange={(e) => setMarkodown(e.target.value)}
            className='form-area'
            name=''
            cols='50'
            rows='10'
            placeholder='Description comes here'
          />
          <button
            type='submit'
            className={`${
              title.length > 0 && markdown.length > 0
                ? 'btn-form'
                : 'btn-form disabled'
            }`}
          >
            Add
          </button>
        </form>
      </div>
    </main>
  );
};

export default Notes;
