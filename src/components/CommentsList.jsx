// React & React Router
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import ErrorPage from "../components/ErrorPage.jsx";
import CommentCard from "../components/CommentCard"

/// Utilities
import * as api from "../utils/api.js";

const CommentsList = () => {
    const {article_id} = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteAlert, setDeleteAlert] = useState(false)

    const deleteComment = (comment_id) => {
        api.deleteComment(comment_id)
            .then(() => {
                setComments(updatedComments);
                setDeleteAlert(true)
            })
            .catch(() => {
                setError(true)
                setIsLoading(false)            
            })
        
        const updatedComments = comments.filter((comment) => {
            if (comment.comment_id !== comment_id) {
                return {...comments}
            }
        })
    }

    useEffect(() => {
        setIsLoading(true)
        api
        .getArticleComments(article_id)
        .then((comments) => {
            setComments(comments);
            setIsLoading(false);
            setError(null);
        });
    }, [article_id]);

    if (error) return <ErrorPage />
    if(isLoading) return <p>Loading...</p>

    return (
        <section className="section__comments">
            <h3>Comments</h3>
            {deleteAlert && 
            <div className="alert alert-success">
                <strong>Success! </strong>Comment deleted
            </div>
        }
        {comments.map((comment) =>  {
            return (
                <CommentCard
                key={comment.comment_id}
                {...comment}
                onDelete={deleteComment}
                />
            )
        })}
        </section>
    );
}
 
export default CommentsList;
