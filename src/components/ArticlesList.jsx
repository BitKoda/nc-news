import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from '../utils/api';
import ArticlesListCard from "./ArticlesListCard";
import ErrorPage from "./ErrorPage";

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { topic } = useParams();

    // let randomUser = Math.random() * 1;
   
    useEffect(() => {
        setIsLoading(true)

        api
            .getArticles(topic)
            .then((articles) => {
                setArticles(articles);
                setIsLoading(false);
                setError(null)
            })
            .catch(({ response: {data: { msg }, status }}) => {
                setError({ status, msg });
                setIsLoading(false);                                    
            });
    }, [topic]);

    if(isLoading) return <p>Loading...</p>
    if (error) return <ErrorPage />
    
    return (
        <section className="section__cards">
        {articles.map((article) =>  {
            return (
                <ArticlesListCard
                key={article.article_id}
                {...article}
                />
            )
        })}
        </section>
    );
};
 
export default ArticlesList;