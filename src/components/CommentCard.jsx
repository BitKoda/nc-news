// Utilities
import formatDate from "../utils/formatDate";
import { BiDislike, BiLike } from "react-icons/bi";

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
        &frasl;&frasl;
        <span className='comment--date'>{formatDate(created_at)}</span>
        &frasl;&frasl;
        <span className='article--metadata-votes'>
          <button className='button__upVote'>
            <BiLike />
          </button>
          <span className='votes'>{votes}</span>
          <button className='button__downVote'>
            <BiDislike />
          </button>
          votes
        </span>
      </div>

      <div className='comment--body'>
        {body}
        <span className='comment--delete'>
          <button
            className={
              user === author
                ? "button--delete-comment"
                : "button--delete-comment-hidden"
            }
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
