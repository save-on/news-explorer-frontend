import Navigation from "../Navigation/Navigation";
import "./SavedNewsHeader.css";

const SavedNewsHeader = ({
  savedArticles,
  isLoggedIn,
  currentUser,
  handleSignOutClick,
}) => {
  const handleKeywords = (articles) => {
    const arr = [];
    articles.forEach((article) => {
      if (arr.includes(article.keyword)) {
        return;
      } else {
        arr.push(article.keyword);
      }
    });
    return handleKeywordFormat(arr);
  };

  const handleKeywordFormat = (arr) => {
    if (arr.length === 0) {
      return "No saved keywords";
    } else if (arr.length < 3) {
      return arr.join(", ");
    } else {
      const [first, second, ...rest] = arr;
      return `${first}, ${second}, and ${rest.length} other`;
    }
  };

  return (
    <header className="saved-news-header">
      <Navigation
        color={"dark"}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onSignOutClick={handleSignOutClick}
      />
      <div className="saved-news-header__container">
        <p className="saved-news-header__subtitle">Saved articles</p>
        <h1 className="saved-news-header__title">
          {`${currentUser.data.name}, ${
            savedArticles.length === 0
              ? "you have no saved articles"
              : `you have ${savedArticles.length} saved articles`
          }`}
        </h1>
        <p className="saved-news-header__keywords-description">
          By keywords:
          <span className="saved-news-header__keywords">
            {handleKeywords(savedArticles)}
          </span>
        </p>
      </div>
    </header>
  );
};

export default SavedNewsHeader;
