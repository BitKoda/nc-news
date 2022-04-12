import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import Header from "./components/Header.jsx"
import Navbar from "./components/Navbar.jsx"
import ArticlesList from "./components/ArticlesList.jsx"
import ArticlePage from "./pages/ArticlePage.jsx"
import ErrorPage from "./components/ErrorPage.jsx";
import * as api from './utils/api';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    api
    .getUsers()
    .then((users) => {
        let index = Math.floor((Math.random() * users.length));
        setUser(users[index].username);
    })
    .then(() => {

    })
  })
  
  return (

    <BrowserRouter>
    <Header user={user} />
    <Navbar />
    <div className="content">
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/article/:article_id" element={<ArticlePage user={user} />} />
        <Route path="/article/:article_id/comments" element={<ArticlePage />} />
        <Route path="/articles/:topic" element={<ArticlesList />} />

        <Route path={"*"} element={<ErrorPage />}></Route>
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
