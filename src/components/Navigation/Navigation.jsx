import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import { useEffect, useState } from "react";
import logoutDark from "../../assets/logout.png";
import logoutLight from "../../assets/logout_light.png";

const Navigation = ({
  color,
  onSignInClick,
  isLoggedIn,
  onSignOutClick,
  currentUser,
}) => {
  const [focus, setFocus] = useState("");

  let location = useLocation();

  useEffect(() => {
    setFocus(location.pathname);
  }, [location]);

  return (
    <nav className={`nav-bar nav-bar_${color}`}>
      <Link to="/" className="nav-bar__logo-container">
        <p className={`nav-bar__logo nav-bar__logo_${color}`}>NewsExplorer</p>
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
        <li className="nav-bar__sign">
          {!isLoggedIn ? (
            <button
              type="button"
              className={`nav-bar__signin-btn nav-bar__signin-btn_${color}`}
              onClick={onSignInClick}
            >
              Sign in
            </button>
          ) : (
            <button
              type="button"
              className={`nav-bar__signout-btn nav-bar__signout-btn_${color}`}
              onClick={onSignOutClick}
            >
              {currentUser.data.name}
              <img
                className={`nav-bar__signout-img nav-bar__signout-img_${color}`}
                src={focus === "/" ? logoutLight : logoutDark}
                alt="logout"
              />
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

// add in the image next to user
// be sure it's light and dark
