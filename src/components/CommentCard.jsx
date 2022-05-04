/// Utilities
import formatDate from "../utils/formatDate";

const CommentCard = ({
  comment_id,
  author,
  body,
  created_at,
  votes,
  onDelete,
  user,
}) => {
  return (
    <div className='article__comment' key={comment_id}>
      <div className='comment--header'>
        <span className='comment--author'>{author} </span>
        <span className='comment--votes'>&frasl;&frasl; {votes} votes &frasl;&frasl;</span>
        <span className='comment--date'>{formatDate(created_at)}</span>
      </div>

      <div className='comment--body'>
        {body}
        <span className='comment--delete'>
          <button
            className={user === author ? 'button--delete-comment' : "button--delete-comment-hidden"}
            onClick={() => onDelete(comment_id)}
          >
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default CommentCard;
