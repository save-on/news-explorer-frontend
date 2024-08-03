import "./MobileMenu.css";
import closeBtn from "../../assets/close.png";
import { Link } from "react-router-dom";
import logoutDark from "../../assets/logout.png";
import logoutLight from "../../assets/logout_light.png";

const MobileMenu = ({
  color,
  activePopup,
  closePopup,
  isLoggedIn,
  onSignInClick,
  onSignOutClick,
  currentUser,
  focus,
}) => {
  const handleOnClick = (e) => {
    if (e.target.classList.contains("mobile-menu")) {
      closePopup();
    }
  };
  return (
    <nav
      className={`mobile-menu ${
        activePopup === "mobile-menu" && "mobile-menu_opened"
      }`}
      onMouseDown={handleOnClick}
    >
      <div className={`mobile-menu__container mobile-menu__container_${color}`}>
        <div
          className={`mobile-menu__logo-container mobile-menu__logo-container_${color}`}
        >
          <p className={`mobile-menu__logo mobile-menu__logo_${color}`}>
            NewsExplorer
          </p>
        </div>
        <img
          src={closeBtn}
          alt="close button"
          className="mobile-menu__close-btn"
          onClick={closePopup}
        />
        <ul className="mobile-menu__content">
          <li className="mobile-menu__home">
            <Link to="/">
              <button
                type="button"
                className={`mobile-menu__btn mobile-menu__btn_${color}`}
                onClick={closePopup}
              >
                Home
              </button>
            </Link>
          </li>
          {isLoggedIn ? (
            <li className="mobile-menu__save-articles">
              <Link to="/saved-news">
                <button
                  type="button"
                  className={`mobile-menu__btn mobile-menu__btn_${color}`}
                  onClick={closePopup}
                >
                  Saved articles
                </button>
              </Link>
            </li>
          ) : null}
          <li className="mobile-menu__sign">
            {!isLoggedIn ? (
              <button
                type="button"
                className={`mobile-menu__signin-btn mobile-menu__signin-btn_${color}`}
                onClick={onSignInClick}
              >
                Sign in
              </button>
            ) : (
              <button
                type="button"
                className={`mobile-menu__signout-btn mobile-menu__signout-btn_${color}`}
                onClick={onSignOutClick}
              >
                {currentUser.data.name}
                <img
                  className={`mobile-menu__signout-img mobile-menu__signout-img_${color}`}
                  src={focus === "/" ? logoutLight : logoutDark}
                  alt="logout"
                />
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileMenu;
