import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <h1 className="nav-bar__logo">NewsExplorer</h1>
      <ul className="nav-bar__content">
        <li className="nav-bar__home-btn">Home</li>
        <li className="nav-bar__signin">
          <button className="nav-bar__signin-btn">Sign in</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
