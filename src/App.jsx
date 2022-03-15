import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Notes, NoteDetail, NotFound } from './pages/index';
import Layout from './components/Layout';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    try {
      const saveNotes = JSON.parse(localStorage.getItem('notes'));
      if (saveNotes) {
        setNotes(saveNotes);
      }
    } catch (error) {}
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Navigate to='/notes' />} />
            <Route
              path='/notes'
              element={<Notes notes={notes} setNotes={setNotes} />}
            />
            <Route
              path='/notes/:idParam'
              element={<NoteDetail notes={notes} setNotes={setNotes} />}
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
