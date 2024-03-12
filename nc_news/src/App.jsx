import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./assets/Components/Navbar";
import ArticleCard from "./assets/Components/ArticleCard";
import ArticlesList from "./assets/Components/ArticlesList";
import Home from "./assets/Components/Home";

function App() {
  const [allArticles, setAllArticles] = useState([]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Navbar />}></Route>
        <Route
          path="/articles/:article_id"
          element={<ArticleCard allArticles={allArticles} />}
        ></Route>
        <Route
          path="/articles"
          element={
            <ArticlesList
              allArticles={allArticles}
              setAllArticles={setAllArticles}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
