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
        {comments.map((comment) =>  {
            return (
                <CommentCard
                key={comment.comment_id}
                {...comment}
                />
            )
        })}
        </section>
    );
}
 
export default CommentsList;
