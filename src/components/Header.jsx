// Utilities
import { BsCompass } from "react-icons/bs";

const Header = ({ user, userAvatar }) => {
  return (
    <>
      <header className='logo'>
        <BsCompass fontSize='5rem' />
        <p className='title'>Northcoders News</p>
      </header>
      <header className='user-login'>
        <span className='avatar'>
          <img src={userAvatar} alt='user {user} avatar' />
        </span>
        <span>
          <strong>Welcome, </strong>
        </span>
        <span className='username'>{user}</span>
      </header>
    </>
  );
};

export default Header;
