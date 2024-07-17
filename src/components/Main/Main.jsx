import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

const Main = ({ searchActive, isLoading, currentKeyword, isLoggedIn }) => {
  return (
    <main className="content">
      <NewsCardList
        searchActive={searchActive}
        isLoading={isLoading}
        currentKeyword={currentKeyword}
        isLoggedIn={isLoggedIn}
      />
      <About />
    </main>
  );
};

export default Main;
