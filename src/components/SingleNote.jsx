import { Link } from 'react-router-dom';

const SingleNote = ({ id, title, markdown, lastModified, onDelete }) => {
  return (
    <li className='notes-list'>
      <div className='notes-title'>{title}</div>
      <p className='notes-markdown'>{markdown}</p>
      <button className='btn-note'>
        <Link to={`/notes/${id}`}>Details</Link>
      </button>
      <small>Posted at: {lastModified}</small>
      <button className='notes-delete' onClick={() => onDelete(id)}>
        delete
      </button>
    </li>
  );
};

export default SingleNote;
