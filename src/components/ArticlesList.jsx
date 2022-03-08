import { useEffect, useState } from "react";
import * as api from '../utils/api';
import SingleArticle from "./SingleArticle";
import formatDate from "../utils/formatDate";
import truncateText from "../utils/truncateText";

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        api.getArticles().
            then((articles) => {
                setArticles(articles);
                setIsLoading(false);
                //setError(null);
            });
    }, []);

    if(isLoading) return <p>Loading...</p>
    
    return (
        <>
        {articles.map((article) =>  {
            console.log(article)
            return (
                <SingleArticle
                key={article.article_id}
                article_id={article.article_id}
                title={article.title}
                author={article.author}
                created_at={formatDate(article.created_at)}
                topic={article.topic}
                comment_count={article.comment_count}
                body={truncateText(article.body)}
                />
            )
        })}
        </>
    );
};
 
export default ArticlesList;