import formatDate from "../utils/formatDate";

const CommentCard = ({ comment_id, author, body, created_at, votes }) => {
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
            </div>
            <div className="comment--item comment--votes">
                Votes {votes}
            </div>
        </article>
    );
}
 
export default CommentCard;