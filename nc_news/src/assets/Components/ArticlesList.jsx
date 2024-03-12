import { useState, useEffect } from "react";
import { getArticles } from "../../../api";
import { Link } from "react-router-dom";
import IsLoading from "./IsLoading";

const ArticlesList = ({ allArticles, setAllArticles }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((response) => {
      setAllArticles(response.data.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <IsLoading />;
  }
  return (
    <ul className="articles-list">
      {allArticles.map((article) => {
        return (
          <div key={article.article_id} className="article_card">
            <li>
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
              <Link to={`/articles/${article.article_id}`}>
                <a className="article_button" href="/article">
                  Read More
                </a>
              </Link>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default ArticlesList;
