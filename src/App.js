import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header.jsx"
import Navbar from "./components/Navbar.jsx"
import ArticlesList from "./components/ArticlesList.jsx"
import ArticlePage from "./pages/ArticlePage.jsx"
import ErrorPage from "./components/ErrorPage.jsx";

function App() {
  return (

    <BrowserRouter>
    <Header />
    <Navbar />
    <div className="content">
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/article/:article_id" element={<ArticlePage />} />
        <Route path="/articles/:topic" element={<ArticlesList />} />

        <Route path={"*"} element={<ErrorPage />}></Route>
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
