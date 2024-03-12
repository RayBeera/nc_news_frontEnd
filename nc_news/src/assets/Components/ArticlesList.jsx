import { useState, useEffect } from "react";
import { getArticles } from "../../../api";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    getArticles().then((response) => {
      setAllArticles(response.data.articles);
    });
  }, []);

  return (
    <ul className="articles-list">
      {allArticles.map((article) => {
        return (
          <div className="article_card">
            <li key={article.article_id}>
              <img src={article.article_img_url} className="article_img"></img>
              <h2 className="article_headings">Title: {article.title}</h2>
              <h3 className="article_headings">Autor: {article.author}</h3>
              <h3 className="article_headings"> Votes: {article.votes} </h3>
              <h3 className="article_headings">
                {" "}
                Comments: {article.comment_count}{" "}
              </h3>
              <h3 className="article_headings">
                {" "}
                Created at: {article.created_at}{" "}
              </h3>
              <a className="article_button" href="/article">
                Read More
              </a>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default ArticlesList;
