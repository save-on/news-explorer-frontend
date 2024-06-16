import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <p className="nav-bar__logo">NewsExplorer</p>
      <ul className="nav-bar__content">
        <li className="nav-bar__home">
          <button className="nav-bar__home-btn">Home</button>
        </li>
        <li className="nav-bar__signin">
          <button className="nav-bar__signin-btn">Sign in</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
