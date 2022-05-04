// React & React Router
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import ErrorPage from "../pages/ErrorPage";
import CommentCard from "../components/CommentCard";
import Footer from "../components/Footer.jsx";

/// Utilities
import * as api from "../utils/api.js";

const CommentsList = ({ user }) => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteAlert, setDeleteAlert] = useState(false);

  const deleteComment = (comment_id) => {
    const remainingComments = comments.filter(
      (comment) => comment.comment_id !== comment_id
    );

    api
      .deleteComment(comment_id)
      .then(() => {
        setComments(remainingComments);
        setDeleteAlert(true);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    api.getArticleComments(article_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
      setError(null);
    });
  }, [article_id]);

  if (error) return <ErrorPage />;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <section className='section__comments'>
        <h3> Comments</h3>
        {deleteAlert && (
          <div className='alert alert-success'>
            <strong>Success! </strong>Comment deleted
          </div>
        )}
        {comments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              {...comment}
              onDelete={deleteComment}
              user={user}
            />
          );
        })}
      </section>
      <Footer />
    </>
  );
};

export default CommentsList;
