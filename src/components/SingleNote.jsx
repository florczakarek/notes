import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { RiDeleteBin6Line } from 'react-icons/ri';
import styles from './SingleNote.module.css';

const SingleNote = ({ id, title, markdown, lastModified, onDelete }) => {
  return (
    <li className={styles.list}>
      <div>
        <div className={styles.title}>{title}</div>
        <ReactMarkdown source={markdown} className={styles.markdown}>
          {markdown.length < 80
            ? markdown.trim()
            : `${markdown.trim().substr(0, 80)}...`}
        </ReactMarkdown>
        <small className={styles.detail}>
          <Link to={`/notes/${id}`}>Posted at: {lastModified}</Link>
        </small>
      </div>
      <RiDeleteBin6Line className={styles.delete} onClick={() => onDelete(id)}>
        delete
      </RiDeleteBin6Line>
    </li>
  );
};

export default SingleNote;
