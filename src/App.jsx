import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Notes from './pages/Notes';
import NoteDetail from './pages/NoteDetail';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
