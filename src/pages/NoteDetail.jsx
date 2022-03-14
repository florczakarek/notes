import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styles from './NoteDetail.module.css';

const Note = ({ notes, setNotes }) => {
  const { idParam } = useParams();

  const findNote = notes.find((note) => note.id === idParam);
  console.log(findNote);
  const { title, markdown, lastModified } = findNote;

  const navigate = useNavigate();

  const deleteSingleNote = () => {
    const filteredNotes = notes.filter((note) => note.id !== idParam);
    setNotes(filteredNotes);
    navigate('/notes');
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <button className='note-btn'>
          <Link to='/notes'>Go back</Link>
        </button>
        <button className='note-btn delete' onClick={deleteSingleNote}>
          Delete note
        </button>
      </div>
      <div className={styles.note}>
        <h3>{title}</h3>
        <ReactMarkdown className={styles.markdown}>{markdown}</ReactMarkdown>
        <small>{lastModified}</small>
      </div>
    </div>
  );
};

export default Note;
