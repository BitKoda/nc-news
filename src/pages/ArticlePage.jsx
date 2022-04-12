// React & React Router
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import ErrorPage from "../components/ErrorPage.jsx";
import CommentsList from "../components/CommentsList.jsx";

/// Utilities
import * as api from "../utils/api.js";
import formatDate from "../utils/formatDate.js";

const ArticlePage = ({user}) => {
    const {article_id} = useParams();
    const [article, setArticle] = useState({});
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [postConfirmed, setPostConfirmed] = useState(false);
    const [votes, setVotes] = useState(0);
    // const [user, setUser] = useState(null);
    //const [visible, setVisible] = useState(false);
    
    const handleChange = (e) => {

        setFormData({ ...formData, 
            [e.target.name]: e.target.value,
            author: user,
            article_id 
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        setIsLoading(true);

        api
        .patchArticle(article, votes)
        .then(() => {
            setIsLoading(false);
            setError(null);
            setArticle(article);
        })
        .catch(({ response: {data: { msg }, status }}) => {
            setError({ status, msg });
            setIsLoading(false);                                    
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)

        api
        .postComment(formData)
        .then((response) => {
            setIsLoading(false);
            setError(null);
            setPostConfirmed(true);
        })
        .catch(({ response: {data: { msg }, status }}) => {
            setError({ status, msg });
            setIsLoading(false);                                    
        });
    }

    useEffect(() => {
        setIsLoading(true);
        
        api
        .getArticle(article_id).then((article) => {
            setArticle(article); 
            // setUser(user)
            setIsLoading(false);
            setPostConfirmed(false);
        })
        .catch(() => {
            setError(true)
            setIsLoading(false)            
        })
    },[article_id]);

    if (error) return <ErrorPage />
    if (isLoading) return <p>Loading....</p>
    
    return (
        <>
        <section className={postConfirmed ? 'fadeIn' : 'fadeOut'}>
            <div className="alert alert-success">
                <strong>Success! </strong>Thanks for your comment, {user}!
            </div>
        </section>
        
        <section id="section__full-article">
            <article className="article__full-article">
                <header className='article__card-header'>
                    <h2 className='article__h2'>{ article.title }</h2>
                    <div className="article--metadata">
                        <span className='author-metadata__article'>
                        by { article.author } 
                        on { formatDate(article.created_at) }
                        </span>
                        <span className='topic--metadata__article'>{ article.topic }</span>
                        <span className='comment-count--metadata__article'> 
                            <a href='#section__comments'>{article.comment_count} comments</a>
                        </span>
                    </div>
                </header>
                <p>
                    {article.body}
                </p>
                <div className="vote-count--metadata__article">
                    <form onSubmit={handleUpdate}>
                        <button className="button__upVote" 
                            onClick={() => setVotes((prevVote) => {
                                return prevVote + 1;
                                })
                            }
                        >
                        👍🏻
                        </button>
                        <span className="vote--counter">{article.votes + votes}</span>
                        <button className="button__downVote" onClick={() => setVotes((prevVote) => {
                                return prevVote - 1;
                                })
                            }
                        >
                        👎🏻
                        </button>
                    </form>
                </div>
            </article>
        </section>
        <section className="form--add--comment">
            {/* <legend>
                Comments
            </legend> */}
            <fieldset>
                <form onSubmit={handleSubmit}>
                    {/* <label htmlFor="author" className="label__username">
                        Author
                    </label>
                    <input 
                        type="text" 
                        name="author"
                        placeholder="Enter your username"
                        onChange={handleChange}
                        required
                    /> */}
                    <label htmlFor="body" className="label__comment--body">
                        Something to say?
                    </label>
                    <textarea
                        className="textarea__comment--body"
                        name="body"
                        placeholder="Please comment - but be nice :)"
                        onChange={handleChange}
                        cols="120" 
                        rows="4"
                        required>                     
                    </textarea>
                    <button className="button__comment-submit">Submit Comment</button>
                </form>
            </fieldset>
        </section>
        <CommentsList />
        </>
    );
}
 
export default ArticlePage;