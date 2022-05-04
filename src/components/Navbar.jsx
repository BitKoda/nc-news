// React & React Router
import {
  Link,
  useSearchParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

// Utilities
import { FaFilter } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";

const Navbar = ({ slugs }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const path = "/article/";
  const navigate = useNavigate();

  if (location.pathname.includes(path)) {
    return (
      <nav className='navbar'>
        <button className='back-btn' onClick={() => navigate("/articles")}>
          <RiArrowGoBackFill /> Back
        </button>
      </nav>
    );
  }

  return (
    <>
      <nav className='navbar'>
        <div className='topics-dropdown'>
          <button className='topics-btn'>
            <FaFilter /> Topics
          </button>
          <div className='topics-content'>
            <Link to='/articles' key={"all"}>
              all
            </Link>
            {slugs.map((slug) => {
              return (
                <Link to={`articles?topic=${slug}`} key={slug}>
                  {slug}
                </Link>
              );
            })}
          </div>
        </div>
        <div className='topics-dropdown'>
          <button className='topics-btn'>Sort by Date</button>
          <div className='topics-content'>
            {location.search !== "" ? (
              <Link
                to={`${location.pathname}${location.search}&sort_by=created_at&order=desc`}
                onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Newest
              </Link>
            ) : (
              <Link to={`${location.pathname}?sort_by=created_at&order=desc`}>
                Newest
              </Link>
            )}
            {location.search !== "" ? (
              <Link
                to={`${location.pathname}${location.search}&sort_by=created_at&order=asc`}
              >
                Oldest
              </Link>
            ) : (
              <Link to={`${location.pathname}?sort_by=created_at&order=asc`}>
                Oldest
              </Link>
            )}
          </div>
        </div>
        <div className='topics-dropdown'>
          <button className='topics-btn'>Sort by Votes</button>
          <div className='topics-content'>
            {location.search !== "" ? (
              <Link
                to={`${location.pathname}${location.search}&sort_by=votes&order=desc`}
              >
                Most
              </Link>
            ) : (
              <Link to={`${location.pathname}?sort_by=votes&order=desc`}>
                Most
              </Link>
            )}
            {location.search !== "" ? (
              <Link
                to={`${location.pathname}${location.search}&sort_by=votes&order=asc`}
              >
                Least
              </Link>
            ) : (
              <Link to={`${location.pathname}?sort_by=votes&order=asc`}>
                Least
              </Link>
            )}
          </div>
        </div>
        <div className='topics-dropdown'>
          <button className='topics-btn'>Sort by Title</button>
          <div className='topics-content'>
            {location.search !== "" ? (
              <Link
                to={`${location.pathname}${location.search}&sort_by=title&order=asc`}
              >
                Title (A-Z)
              </Link>
            ) : (
              <Link to={`${location.pathname}?sort_by=title&order=asc`}>
                Title (A-Z)
              </Link>
            )}
            {location.search !== "" ? (
              <Link
                to={`${location.pathname}${location.search}&sort_by=title&order=desc`}
              >
                Title (Z-A)
              </Link>
            ) : (
              <Link to={`${location.pathname}?sort_by=title&order=desc`}>
                Title (Z-A)
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
