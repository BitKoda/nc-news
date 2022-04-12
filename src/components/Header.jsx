const Header = ({user}) => {
    return ( 
        <header className="header__container">
            <div className="logo">
                <h1>NC/DC</h1>
                <p>It's a long way to the top (if you wanna learn to code)</p>
            </div>
            <div className="user-login"><strong>Welcome back...</strong> {user}</div>
        </header>
     );
}
 
export default Header;