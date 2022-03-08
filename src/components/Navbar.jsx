const Navbar = () => {
    return ( 
        <nav className="navbar">
             <div className="topics-dropdown">
                <button class="topics-btn">Topics</button>
                <div className="topics-content">
                    <a href="#">Football</a>
                    <a href="#">React</a>
                    <a href="#">JavaScript</a>
                </div>
            </div> 
        </nav>
     );
}
 
export default Navbar;
