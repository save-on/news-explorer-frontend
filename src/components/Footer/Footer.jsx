import "./Footer.css";
import gitHub from "../../assets/github.png";
import faceBook from "../../assets/iconmonstr-facebook-6.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <ul className="footer__info-list">
        <li className="footer__links">
          <Link className="footer__link" to="/">
            Home
          </Link>
          <a
            className="footer__link"
            href="https://tripleten.com/programs/main/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
        </li>
        <li className="footer__socials">
          <a
            className="footer__social"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__github-img"
              src={gitHub}
              alt="github link"
            />
          </a>
          <a
            className="footer__social"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__facebook-img"
              src={faceBook}
              alt="facebook link"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
