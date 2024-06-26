import "./Navigation.css";

const Navigation = ({ color, onSignInClick }) => {
  return (
    <nav className={`nav-bar nav-bar_${color}`}>
      <p className={`nav-bar__logo nav-bar__logo_${color}`}>NewsExplorer</p>
      <ul className="nav-bar__content">
        <li className="nav-bar__home">
          <button className={`nav-bar__btn nav-bar__btn_${color}`}>Home</button>
        </li>
        <li className="nav-bar__save-articles">
          <button
            type="button"
            className={`nav-bar__btn nav-bar__btn_${color}`}
          >
            Saved articles
          </button>
        </li>
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
