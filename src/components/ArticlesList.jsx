import { useEffect, useState } from "react";
import * as api from '../utils/api';
import SingleArticle from "./SingleArticle";
import formatDate from "../utils/formatDate";


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
        <section className="section__cards">
        {articles.map((article) =>  {
            return (
                <SingleArticle
                key={article.article_id}
                {...article}
                />
            )
        })}
        </section>
    );
};
 
export default ArticlesList;