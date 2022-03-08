import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header.jsx"
import Navbar from "./components/Navbar.jsx"
import ArticlesList from "./components/ArticlesList.jsx"
import SingleArticle from "./components/SingleArticle.jsx"


function App() {
  return (

    <BrowserRouter>
    <Header />
    <Navbar />
    <div className="content">
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
