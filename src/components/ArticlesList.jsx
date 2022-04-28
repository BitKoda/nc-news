import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ArticlesListCard from "./ArticlesListCard";
import Footer from "./Footer";
import ErrorPage from "./ErrorPage";
import * as api from "../utils/api"

const ArticlesList = () => {
    //console.log(articles, "<<< ARTICLES LIST")
    const [articles, setArticles] = useState([]);   
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [searchParams, setSearchParams] = useSearchParams();
    const params = Object.fromEntries([...searchParams]);
    // console.log('Mounted: ', params)

    useEffect(() => {
        setIsLoading(true)
        const currentParams = Object.fromEntries([...searchParams]);
        // console.log('useEffect', currentParams)
        api
            .getArticles(currentParams)
            .then((articles) => {
                setArticles(articles);
                setIsLoading(false);
                setError(null)
            })
            .catch(({ response: {data: { msg }, status }}) => {
                setError({ status, msg });
                setIsLoading(false);                                    
            });
    }, [searchParams]);

    if(isLoading) return <p>Loading...</p>
    if (error) return <ErrorPage />
    
    return (
        <><section className="section__cards">
            {articles.map((article) => {
                return (
                    <ArticlesListCard
                        key={article.article_id}
                        {...article} />
                );
            })}
        </section><Footer /></>
    );
};
 
export default ArticlesList;