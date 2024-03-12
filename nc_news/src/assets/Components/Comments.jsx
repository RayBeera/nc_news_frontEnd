import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllComments } from "../../../api";
import IsLoading from "./IsLoading";

const Comments = () => {
  const article_id = useParams().article_id;

  const [allComments, setAllComments] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllComments(article_id).then((comment) => {
      setAllComments(comment);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <IsLoading />;
  }
  return (
    <ul>
      {allComments.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <li>
              <h4>{comment.author}</h4>
              <p>{comment.body}</p>
            </li>
            <h4>Votes: {comment.votes}</h4>
          </div>
        );
      })}
    </ul>
  );
};

export default Comments;
