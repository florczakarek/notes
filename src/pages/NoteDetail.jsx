import { Link, useNavigate, useParams } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';

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
    <div>
      <figure className='note'>
        <RiDeleteBin6Line className='delete' onClick={deleteSingleNote} />
        <h2>{title}</h2>
        <p>{markdown}</p>
        <figcaption>{lastModified}</figcaption>
      </figure>
      <button className='btn-note'>
        <Link to='/notes'>Back to notes</Link>
      </button>
    </div>
  );
};

export default Note;
