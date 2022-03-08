import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as api from "../utils/api.js";
import SingleArticle from '../components/SingleArticle';
import formatDate from "../utils/formatDate.js";

const ArticlePage = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        api.getArticle(article_id).then((article) => {
            setArticle(article)
            setIsLoading(false)
        });
    }, []);

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
            <div id="article__comments">

            </div>
        
        </div>
    );
}
 
export default ArticlePage;