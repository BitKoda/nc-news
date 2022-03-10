import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as api from "../utils/api.js";
import formatDate from "../utils/formatDate.js";
import ErrorPage from "../components/ErrorPage.jsx";

const ArticlePage = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        api
        .getArticle(article_id).then((article) => {
            setArticle(article)
            setIsLoading(false)
        })
        .catch(() => {
            setError(true)
            setIsLoading(false)            
        })
    }, [article_id]);

    if (error) return <ErrorPage />
    if(isLoading) return <p>Loading....</p>

    return (
        <section id="section__full-article">
            <article className="article__full-article">
                <header>
                <Link to={`/article/${article_id}`}>
                    <h2 className='article__h2'>{ article.title }</h2>
                </Link>
                <div className="article--metadata">
                    <span>by {article.author} on {formatDate(article.created_at)}</span>
                    <span className='topic--metadata__article'>{article.topic}</span>
                    <span className='comment-count--metadata__article'>{article.comment_count}</span>
                </div>
                </header>
                <p>
                    {article.body}
                </p>
            </article>
        </section>
    );
}
 
export default ArticlePage;