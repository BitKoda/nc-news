import { Link, useSearchParams, useLocation } from "react-router-dom";
import {
  FaFilter,
  FaSortAlphaDownAlt,
  FaSortAlphaDown,
  FaSortAmountDownAlt,
  FaSortAmountUpAlt,
} from "react-icons/fa";

const Navbar = ({ slugs }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const getLocation = (location) => {
    if (location.pathname === "/" || location.pathname === "/articles") {
      return "?";
    }
  };

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
              <Link
                to={`${location.pathname}?sort_by=created_at&order=desc`}
                // onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Newest
              </Link>
            )}
            {location.search !== "" ? (
              <Link
                to={`${location.pathname}${location.search}&sort_by=created_at&order=asc`}
                // onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Oldest
              </Link>
            ) : (
              <Link
                to={`${location.pathname}?sort_by=created_at&order=asc`}
                // onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Oldest
              </Link>
            )}
            {/* <Link
              to={`${location.pathname}${location.search}`}
              // onClick={() =>
              //   setSearchParams({ sort_by: "title", order: "desc" })
              // }
            >
              Title (Z-A)
            </Link> */}
          </div>
        </div>
        {/* <FaSortAlphaDownAlt fontSize="1.2em" /> */}
        <div className='topics-dropdown'>
          <button className='topics-btn'>Sort by Votes</button>
          <div className='topics-content'>
            {location.search !== "" ? (
              <Link
                to={`${location.pathname}${location.search}&sort_by=votes&order=desc`}
                // onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Most
              </Link>
            ) : (
              <Link
                to={`${location.pathname}?sort_by=votes&order=desc`}
                // onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Most
              </Link>
            )}
            {location.search !== "" ? (
              <Link
                to={`${location.pathname}${location.search}&sort_by=votes&order=asc`}
                // onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Least
              </Link>
            ) : (
              <Link
                to={`${location.pathname}?sort_by=votes&order=asc`}
                // onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Least
              </Link>
            )}
            {/* <Link
              to={`${location.pathname}${location.search}`}
              // onClick={() =>
              //   setSearchParams({ sort_by: "title", order: "desc" })
              // }
            >
              Title (Z-A)
            </Link> */}
          </div>
        </div>
        <div className='topics-dropdown'>
          <button className='topics-btn'>Sort by Title</button>
          <div className='topics-content'>
            {location.search !== "" ? (
              <Link
                to={`${location.pathname}${location.search}&sort_by=title&order=asc`}
                // onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Title (A-Z)
              </Link>
            ) : (
              <Link
                to={`${location.pathname}?sort_by=title&order=asc`}
                // onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Title (A-Z)
              </Link>
            )}
            {location.search !== "" ? (
              <Link
                to={`${location.pathname}${location.search}&sort_by=title&order=desc`}
                // onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Title (Z-A)
              </Link>
            ) : (
              <Link
                to={`${location.pathname}?sort_by=title&order=desc`}
                // onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Title (Z-A)
              </Link>
            )}
            {/* <Link
              to={`${location.pathname}${location.search}`}
              // onClick={() =>
              //   setSearchParams({ sort_by: "title", order: "desc" })
              // }
            >
              Title (Z-A)
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
