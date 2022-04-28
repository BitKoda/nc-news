// React specific imports
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
// Pages
import ErrorPage from "./ErrorPage";
// Components
import ArticlesList from "../components/ArticlesList";
import Navbar from "../components/Navbar";
// Utilities
import * as api from "../utils/api";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topics, setTopics] = useState([]);

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .getTopics()
      .then((topics) => {
        setTopics(topics);
        setIsLoading(false);
        setError(null);
      })
      .catch(
        ({
          response: {
            data: { msg },
            status,
          },
        }) => {
          setError({ status, msg });
          setIsLoading(false);
        }
      );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles(topic)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
        setError(null);
      })
      .catch(
        ({
          response: {
            data: { msg },
            status,
          },
        }) => {
          setError({ status, msg });
          setIsLoading(false);
        }
      );
  }, [topic]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <ErrorPage />;

  return (
    <>
      <Navbar topics={topics} articles={articles} />
      <ArticlesList articles={articles} />
    </>
  );
};

export default Home;

//     return (
//         <>
//         {/* <section className="search">
//             <input
//                 type="text"
//                 value={search.get('author')}
//                 onChange={handleSearch}
//             />
//         </section> */}
//         <section className="section__cards">
//         <Search articles={articles} />
//         // {articles.filter(byAuthor(search.get('author'))).map((article) =>  {
//             return (
//                 <ArticlesListCard
//                 key={article.article_id}
//                 {...article}
//                 />
//             )
//         })//}
//         </section>
//         </>
//     );
// };

// export default ArticlesList;
