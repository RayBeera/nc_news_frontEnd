import { useState, useEffect } from "react";
import { getArticles } from "../../../api";

const ArticlesList = () => {
  const[ allArticles, setAllArticles] = useState([])

  useEffect(() => {
    getArticles().then((response) => {
      setAllArticles(response.data.articles);
    });
  }, []);
  return (
    <ul>
      {allArticles.map((article) => {
        console.log(article)
        return (
         <li>
          <h2>Title: {article.title}</h2>
          <h3>Autor: {article.author}</h3>
          <h3> Created at:{article.created_at} </h3>
          </li>
        )
      })}
    </ul>
  );
};

export default ArticlesList;
