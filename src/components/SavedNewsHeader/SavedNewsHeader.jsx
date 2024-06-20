import Navigation from "../Navigation/Navigation";
import "./SavedNewsHeader.css";

const SavedNewsHeader = () => {
  return (
    <header className="saved-news-header">
      <Navigation color={"dark"} />
      <div className="saved-news-header__container">
        <p className="saved-news-header__subtitle">Saved articles</p>
        <h1 className="saved-news-header__title">
          Elise, you have 5 saved articles
        </h1>
        <p className="saved-news-header__keywords-description">
          By keywords:
          <span className="saved-news-header__keywords">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
    </header>
  );
};

export default SavedNewsHeader;
