import {BsFillSuitHeartFill} from "react-icons/bs"
import { SiLinkedin, SiGithub, SiTwitter, SiPostgresql, SiReact, SiNodedotjs } from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <div className='contact'>
        <div className='footer-heading'>Contact</div>
        <ul className='footer-items'>
          <li class='footer-link'>
            <SiGithub fontSize='1.5em' />
            <a href='https://github.com/BitKoda/'>Github</a>
          </li>
          <li class='footer-link'>
            <SiLinkedin fontSize='1.5em' paddingright='10px' />
            <a href='https://www.linkedin.com/in/patrick-finlay'>LinkedIn</a>
          </li>
          <li class='footer-link'>
            <SiTwitter fontSize='1.5em' />
            <a href='https://twitter.com/BitKoda'>Twitter</a>
          </li>
        </ul>
      </div>
      <div className='footer-heading'>&copy; 2022 Northcoders</div>
      <div className='tech'>
        <div className='footer-heading'>BUILT WITH <BsFillSuitHeartFill /> AND</div>
        <ul className='footer-items'>
        <li class='footer-link'>
            <SiNodedotjs fontSize='1.5em' />
            <a href='https://nodejs.org'>Node v16.13.0</a>
          </li>
          <li class='footer-link'>
            <SiPostgresql fontSize='1.5em' />
            <a href='https://www.postgresql.org/docs/11/index.html'>
              PostgeSQL v11.7
            </a>
          </li>
          <li class='footer-link'>
            <SiReact fontSize='1.5em' />
            <a href='https://reactjs.org/docs/getting-started.html'>
              React v17.0.2
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
