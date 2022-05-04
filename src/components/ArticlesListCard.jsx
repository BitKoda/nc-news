// React & React Router
import { Link } from "react-router-dom";

// Utilities
import truncateText from "../utils/truncateText";
import formatDate from "../utils/formatDate";

const ArticlesListCard = ({
  article_id,
  body,
  title,
  author,
  created_at,
  topic,
  comment_count,
  votes,
}) => {
  return (
    <article className='article__card'>
      <header className='article__card-header'>
        <Link to={`/article/${article_id}`}>
          <h2 className='article__h2'>{title}</h2>
        </Link>
        <div className='article--metadata'>
          <span className='article--metadata-author'>by {author}</span>{" "}
          &frasl;&frasl;
          <span className='article--metadata-date'>
            {formatDate(created_at)}
          </span>
          &frasl;&frasl;
          <Link to={`/articles/?topic=${topic}`}>
            <span className='article--metadata-topic'>{topic}</span>
          </Link>
          &frasl;&frasl;
          <span className='article--metadata-comments'>
            {comment_count} comments
          </span>
          &frasl;&frasl;
          <span className='article--metadata-comments'>{votes} votes</span>
        </div>
      </header>
      <p>{truncateText(body)}</p>
    </article>
  );
};

export default ArticlesListCard;
