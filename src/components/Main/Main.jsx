import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

const Main = ({
  searchActive,
  isLoading,
  currentKeyword,
  isLoggedIn,
  setSavedArticles,
  savedArticles,
}) => {
  return (
    <main className="content">
      <NewsCardList
        searchActive={searchActive}
        isLoading={isLoading}
        currentKeyword={currentKeyword}
        isLoggedIn={isLoggedIn}
        setSavedArticles={setSavedArticles}
        savedArticles={savedArticles}
      />
      <About />
    </main>
  );
};

export default Main;
