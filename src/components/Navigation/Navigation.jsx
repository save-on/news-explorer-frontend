import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ color, onSignInClick, isLoggedIn }) => {
  return (
    <nav className={`nav-bar nav-bar_${color}`}>
      <Link to="/" className={`nav-bar__logo nav-bar__logo_${color}`}>
        <p>NewsExplorer</p>
      </Link>
      <ul className="nav-bar__content">
        <li className="nav-bar__home">
          <Link to="/">
            <button className={`nav-bar__btn nav-bar__btn_${color}`}>
              Home
            </button>
          </Link>
        </li>
        {isLoggedIn ? (
          <li className="nav-bar__save-articles">
            <Link to="/saved-news">
              <button
                type="button"
                className={`nav-bar__btn nav-bar__btn_${color}`}
              >
                Saved articles
              </button>
            </Link>
          </li>
        ) : null}
        <li className="nav-bar__signin">
          <button
            className={`nav-bar__signin-btn nav-bar__signin-btn_${color}`}
            onClick={onSignInClick}
          >
            Sign in
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
