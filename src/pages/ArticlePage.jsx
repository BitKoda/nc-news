import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as api from "../utils/api.js";
import formatDate from "../utils/formatDate.js";
import ErrorPage from "../components/ErrorPage.jsx";
import AddCommentForm from "../components/AddCommentForm" 

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
        <>
        <section id="section__full-article">
            <article className="article__full-article">
            <header className='article__card-header'>
                <h2 className='article__h2'>{ article.title }</h2>
                <div className="article--metadata">
                    <span className='author-metadata__article'>by { article.author } on {formatDate(article.created_at)}</span>
                    <span className='topic--metadata__article'>{ article.topic }</span>
                    <span className='comment-count--metadata__article'>{ article.comment_count } comments</span>
                </div>
            </header>
                <p>
                    {article.body}
                </p>
            </article>
        </section>
       <AddCommentForm />
       </>
    );
}
 
export default ArticlePage;