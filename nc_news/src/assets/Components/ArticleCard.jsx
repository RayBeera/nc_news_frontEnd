import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IsLoading from "./IsLoading";
import { getArticleById } from "../../../api";

const ArticleCard = () => {
  const article_id = useParams().article_id;

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    <isLoading />;
  }
  return (
    <div>
      <img src={article.article_img_url} className="article_card_img"></img>
      <h3 className="article_headings">By: {article.author}</h3>
      <h1 className="article_headings"> {article.title}</h1>
      <h3 className="article_headings"> Topic : {article.topic} </h3>
      <h3 className="article_headings"> Votes: {article.votes} </h3>
      <h3 className="article_headings"> Created at: {article.created_at} </h3>
      <p> {article.body}</p>

      <button>
        <h3 className="article_headings"> Comments {article.comment_count} </h3>
      </button>
    </div>
  );
};

export default ArticleCard;
