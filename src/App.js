import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import ArticlesList from "./components/ArticlesList.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Footer from "./components/Footer.jsx";
import * as api from "./utils/api";

function App() {
  const [user, setUser] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
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

  const slugs = [...new Set(topics.map((topic) => topic.slug))];

  return (
    <div id='container'>
      <BrowserRouter>
        <Header user={user} userAvatar={userAvatar} />
        <Navbar slugs={slugs} />
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
  );
}

export default App;
