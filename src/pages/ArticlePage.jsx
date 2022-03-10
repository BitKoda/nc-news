import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as api from "../utils/api.js";
import SingleArticle from '../components/SingleArticle';
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
        <div id="article__fullcard">
            <SingleArticle
                article_id={article.article_id} 
                title={article.title}
                topic={article.topic}
                author={article.author}
                body={article.body}
                created_at={formatDate(article.created_at)}
                votes={article.votes}
                comment_count={article.comment_count}
            />
        </div>
    );
}
 
export default ArticlePage;