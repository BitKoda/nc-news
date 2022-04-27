import { Link, useSearchParams, useLocation } from "react-router-dom";


const Navbar = ({ slugs }) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();


  const getLocation = (location) => {
    if (location.pathname === '/' || location.pathname === '/articles') {
      return "?"
    }
  }
 
  console.log(location.pathname, "<<<--- path");

  console.log(location.search, "<<<--- search");

  return (
    <>
      <nav className='navbar'>
        <div className='topics-dropdown'>
          <button className='topics-btn'>Topics</button>
          <div className='topics-content'>
            <Link to='/articles' key={"all"}>
              all
            </Link>
            {slugs.map((slug) => {
              return (
                <Link
                  to={`articles?topic=${slug}`}
                  key={slug}
                  // onClick={() => setSearchParams({ topic: { slug } })}
                >
                  {slug}
                </Link>
              );
            })}
          </div>
        </div>
        <div className='topics-dropdown'>
          <button className='topics-btn'>Sort</button>
          <div className='topics-content'>
            {location.search !== "" ? (
              <Link
                to={`${location.pathname}${location.search}&sort_by=title&order=ASC`}
                // onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Title (A-Z)
              </Link>
            ) : (
              <Link
                to={`${location.pathname}?sort_by=title&order=ASC`}
                // onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Title (A-Z)
              </Link>
            )}
            {location.search !== "" ? (
              <Link
                to={`${location.pathname}${location.search}&sort_by=title&order=DESC`}
                // onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Title (Z-A)
              </Link>
            ) : (
              <Link
                to={`${location.pathname}?sort_by=title&order=DESC`}
                // onClick={() => setSearchParams({ sort_by: "title" })}
              >
                Title (Z-A)
              </Link>
            )}
            {/* <Link
              to={`${location.pathname}${location.search}`}
              // onClick={() =>
              //   setSearchParams({ sort_by: "title", order: "DESC" })
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
