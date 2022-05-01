/// Utilities
import formatDate from "../utils/formatDate";
import { TiDeleteOutline } from "react-icons/ti";

const CommentCard = ({
  comment_id,
  author,
  body,
  created_at,
  votes,
  onDelete,
}) => {
  return (
    <div className='article__comment' key={comment_id}>
      <div className='comment--header'>
        <span className='comment--author'>{author} </span>
        <span className='comment--votes'>// {votes} votes // </span>
        <span className='comment--date'>{formatDate(created_at)}</span>
      </div>

      <div className='comment--body'>
        {body}
        <span className='comment--delete'>
          <button
            className='button--delete-comment'
            onClick={() => onDelete(comment_id)}
          >
            {" "}
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default CommentCard;
