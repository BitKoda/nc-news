import { useEffect, useState } from "react";
import * as api from '../utils/api';

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        api.getArticles().
            then((articles) => {
                setArticles(articles);
                setIsLoading(false);
            });
    }, []);

    
    if(isLoading) return <p>Loading...</p>
    
    return ( 
        {articles.map((article) =>  {
            return (
            <div className="article-card" key={article.article_id}>
                
                    <h2>{article.title}</h2>
            );
        })};
        </div>
     );
}
 
export default ArticlesList;