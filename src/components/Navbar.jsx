import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import * as api from '../utils/api';
import ErrorPage from "./ErrorPage";

const Navbar = () => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        api
            .getTopics()
            .then((topics) => {
                setTopics(topics);
                setIsLoading(false);
                setError(null)
            })
            .catch(({ response: {data: { msg }, status }}) => {
                setError({ status, msg });
                setIsLoading(false);                                    
            });
    }, []);

    if(isLoading) return <p>Loading...</p>
    if (error) return <ErrorPage />

    return ( 
        <nav className="navbar">
             <div className="topics-dropdown">
                <button className="topics-btn">Topics</button>
                <div className="topics-content">
                    <Link to='/' key={'all'}>all</Link>
                    {topics.map((topic) =>  {
                        return (
                            <Link to={`articles/${topic.slug}`} key={topic.slug}>
                            {topic.slug}
                            </Link>
                        )
                    })}  
                </div>
            </div> 
        </nav>
     );
}
 
export default Navbar;
