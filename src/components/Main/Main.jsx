import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

const Main = ({ searchActive, isLoading, currentKeyword }) => {
  return (
    <main className="content">
      <NewsCardList
        searchActive={searchActive}
        isLoading={isLoading}
        currentKeyword={currentKeyword}
      />
      <About />
    </main>
  );
};

export default Main;
