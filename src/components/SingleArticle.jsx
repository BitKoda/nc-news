import { Link } from 'react-router-dom'

const SingleArticle = ({ article_id, 
    title, 
    author, 
    created_at, 
    topic, 
    comment_count,
    body
}) => {
    return (

        <article className="article__card">
            <header>
            <Link to={`/articles/${article_id}`}>
                <h2>{ title }</h2>
            </Link>
            <div className="article--metadata">
                <span>by {author} on {created_at}</span>
                <span className='topic--metadata__article'>{topic}</span>
                <span className='comment-count--metadata__article'>{comment_count}</span>
            </div>
            </header>
            <p>
                {body}
            </p>
        </article>

     );
}
 
export default SingleArticle;