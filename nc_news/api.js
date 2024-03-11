import axios from "axios";

const getArticles = () => {
  return axios
    .get("https://nc-news-mr7q.onrender.com/api/articles")
    .then((data) => {
      return data;
    });
};

export { getArticles };
