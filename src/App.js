import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import ArticlesList from "./components/ArticlesList.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import * as api from "./utils/api";

function App() {
  const [user, setUser] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    api
      .getUsers()
      .then((users) => {
        let index = Math.floor(Math.random() * users.length);
        setUser(users[index].username);
        setUserAvatar(users[index].avatar_url);
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
  }, [topic]);

  // useEffect(() => {
  //     setIsLoading(true)
  //     api
  //         .getArticles(topic)
  //         .then((articles) => {
  //             setArticles(articles);
  //             setIsLoading(false);
  //             setError(null)
  //         })
  //         .catch(({ response: {data: { msg }, status }}) => {
  //             setError({ status, msg });
  //             setIsLoading(false);
  //         });
  // }, []);

  const authors = [...new Set(articles.map((article) => article.author))];

  const slugs = [...new Set(topics.map((topic) => topic.slug))];

  return (
    <div className='container'>
      <div className='wrapper'>
        <BrowserRouter>
          <Header user={user} userAvatar={userAvatar} />
          <Navbar slugs={slugs} authors={authors} />
          <Routes>
            <Route path='/' element={<ArticlesList />} />
            <Route path='/articles' element={<ArticlesList />} />
            <Route
              path='/article/:article_id'
              element={<ArticlePage user={user} />}
            />
            <Route
              path='/article/:article_id/comments'
              element={<ArticlePage />}
            />
            <Route path={"*"} element={<ErrorPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
