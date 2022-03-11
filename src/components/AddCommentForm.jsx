// React
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

// Components
import * as api from "../utils/api.js";
import ErrorPage from "../components/ErrorPage.jsx";

const AddCommentForm = () => {
    
    const { article_id } = useParams();
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    //const [comments, setComments] = useState([])
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const comment = { author, body, article_id }
        setIsLoading(true)

        api
        .postComment(comment)
        .then((response) => {
            console.log(response.data, "<<<<Submitted form")
            //setComment(comment);
            
            setIsLoading(false);
            setError(null)
        })
        .catch(({ response: {data: { msg }, status }}) => {
            setError({ status, msg });
            setIsLoading(false);                                    
        });
    }

    if (error) return <ErrorPage />
    if(isLoading) return <p>Loading....</p>

    return ( 
        <div className="form--add--comment">
            <h3 className="form__heading">
                Something to say?
            </h3>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">
                        Username
                    </label>
                    <input 
                        type="text" 
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <label htmlFor="">
                        Comment
                    </label>
                    <textarea 
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        name="" 
                        id="" 
                        cols="120" 
                        rows="4">                     
                    </textarea>
                    <button>Comment</button>
                </form>
            </fieldset>
        </div>
     );
}
 
export default AddCommentForm;