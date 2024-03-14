import axios from "axios";

const getArticles = () => {
  return axios
    .get("https://nc-news-mr7q.onrender.com/api/articles")
    .then((data) => {
      return data;
    });
};
const getArticleById = (article_id) => {
  return axios
    .get(`https://nc-news-mr7q.onrender.com/api/articles/${article_id}`)
    .then((data) => {
      return data.data.article;
    });
};

const getAllComments = (article_id) => {
  return axios
    .get(
      `https://nc-news-mr7q.onrender.com/api/articles/${article_id}/comments`
    )
    .then((data) => {
      return data.data.comments;
    });
};

const patchVotes = (article_id, votesValue) => {
  const patchBody = {
    inc_votes: votesValue,
  };
  return axios
    .patch(
      `https://nc-news-mr7q.onrender.com/api/articles/${article_id}`,
      patchBody
    )
    .then((data) => {
      return data.data.article;
    });
};
export { getArticles, getArticleById, getAllComments, patchVotes };
