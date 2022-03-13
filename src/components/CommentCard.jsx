/// Utilities
import formatDate from "../utils/formatDate";

const CommentCard = ({ comment_id, author, body, created_at, votes, onDelete }) => {

    return (
        <article className="article__comment" key={comment_id}>
            <div className="comment--item comment--body">
                {body}
            </div>
            <div className="comment--item comment--author">
                {author}
            </div>
            <div className="comment--item comment--date">
                {formatDate(created_at)}
                <span>
                <button className="button-delete-comment" onClick={() => onDelete(comment_id)}>delete ❌ </button>
                </span>
            </div>
            <div className="comment--item comment--votes">
                Votes {votes}
            </div>
        </article>
    );
}
 
export default CommentCard;