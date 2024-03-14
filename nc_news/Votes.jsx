import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { patchVotes } from "./api";

const Votes = ({ article_id, setArticle }) => {
  const [vote, setVote] = useState(false);

  const handleVoteValue = (value) => {
    setVote(true);
    setArticle((prevArticle) => ({
      ...prevArticle,
      votes: prevArticle.votes + value,
    }));
    patchVotes(article_id, value).then(() => {
      setArticle((updatedArticle) => {
        console.log(updatedArticle);
        setArticle(updatedArticle);
      });
    });
    setVote(false);
  };

  return (
    <div>
      <button
        onClick={() => {
          handleVoteValue(+1);
        }}
      >
        {" "}
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>

      <button
        onClick={() => {
          handleVoteValue(-1);
        }}
      >
        <FontAwesomeIcon icon={faThumbsDown} />
      </button>
    </div>
  );
};
export default Votes;
