import { Link } from 'react-router-dom'

const ErrorPage = ({status, msg}) => {
    status = status || "404";
    return (
        <>
        <h3>
            {status}: {msg || "Sorry, we couldn't find what you were looking for" }
        </h3>
        <p>
            <Link to="/">Return to home page.</Link>
        </p>
        </>
     );
}
 
export default ErrorPage;