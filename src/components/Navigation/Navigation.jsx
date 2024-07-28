import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import { useEffect, useState } from "react";

const Navigation = ({ color, onSignInClick, isLoggedIn }) => {
  const [focus, setFocus] = useState("");

  let location = useLocation();

  useEffect(() => {
    setFocus(location.pathname);
  }, [location]);

  return (
    <nav className={`nav-bar nav-bar_${color}`}>
      <Link to="/" className={`nav-bar__logo nav-bar__logo_${color}`}>
        <p>NewsExplorer</p>
      </Link>
      <ul className="nav-bar__content">
        <li className="nav-bar__home">
          <Link to="/">
            <button
              type="button"
              className={`nav-bar__btn nav-bar__btn_${color} ${
                focus === "/" && "nav-bar__btn_home"
              }`}
            >
              Home
            </button>
          </Link>
        </li>
        {isLoggedIn ? (
          <li className="nav-bar__save-articles">
            <Link to="/saved-news">
              <button
                type="button"
                className={`nav-bar__btn nav-bar__btn_${color} ${
                  focus === "/saved-news" && "nav-bar__btn_home"
                }`}
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
