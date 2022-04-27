const Header = ({ user, userAvatar }) => {
  return (
    <header className="header__container">
      <div className="logo">
        <h1>NC/DC</h1>
        <p>It's a long way to the top</p>
        <p>(if you wanna learn to code)</p>
      </div>
      <div className="user-login">
        
        <span className="avatar">
          <img
            src={userAvatar}
            alt="user {user} avatar"
          />
        </span>
        <span>
          <strong>Welcome, </strong>
        </span>
        <span className="username">{user}</span>
      </div>
    </header>
  );
};

export default Header;
