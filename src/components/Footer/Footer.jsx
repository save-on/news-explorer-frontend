import "./Footer.css";
import gitHub from "../../assets/github.png";
import faceBook from "../../assets/iconmonstr-facebook-6.png";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <ul className="footer__info-list">
        <li className="footer__info">
          <button className="footer__home-btn" type="button">
            Home
          </button>
        </li>
        <li className="footer__info">
          <button type="button" className="footer__tripleten-btn">
            TripleTen
          </button>
        </li>
        <li className="footer__info">
          <img src={gitHub} alt="" className="footer__github" />
        </li>
        <li className="footer__info">
          <img src={faceBook} alt="" className="footer__facebook" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
