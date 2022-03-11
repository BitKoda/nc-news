import { Link } from 'react-router-dom'
import truncateText from "../utils/truncateText";
import formatDate from "../utils/formatDate";

const SingleArticle = ({ article_id, body, title, author, created_at, topic, comment_count }) => {
    return (
        <article className="article__card">
            <header className='article__card-header'>
                <Link to={`/article/${article_id}`}>
                    <h2 className='article__h2'>{ title }</h2>
                </Link>
                <div className="article--metadata">
                    <span className='author-metadata__article'>by {author} on {formatDate(created_at)}</span>
                    <span className='topic--metadata__article'>{topic}</span>
                    <span className='comment-count--metadata__article'>{comment_count} comments</span>
                </div>
            </header>
            <p>
                {truncateText(body)}
            </p>
        </article>
    );
}
 
export default SingleArticle;