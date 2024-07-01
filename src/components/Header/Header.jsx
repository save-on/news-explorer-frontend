import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

const Header = ({ handleSignInClick, handleSubmit, setSearchActive }) => {
  return (
    <header className="header">
      <Navigation color={"light"} onSignInClick={handleSignInClick} />
      <h1 className="header__title">What's going on in the world?</h1>
      <p className="header__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm
        handleSubmit={handleSubmit}
        setSearchActive={setSearchActive}
      />
    </header>
  );
};

export default Header;
