// React
import { useState } from "react";
import { useParams } from "react-router-dom";

// Components
import * as api from "../utils/api.js";
import ErrorPage from "../components/ErrorPage.jsx";

const AddCommentForm = () => {
    
    const { article_id } = useParams();
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState(false);
    
    
    return ( 
        <div className="form--add--comment">
            <h3 className="form__heading">
                Something to say?
            </h3>
            <fieldset>
                <form>
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
                    <textarea required name="" id="" cols="30" rows="10">

                    </textarea>
                </form>
            </fieldset>
        </div>
     );
}
 
export default AddCommentForm;