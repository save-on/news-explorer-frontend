import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

const Main = ({ searchActive, isLoading }) => {
  return (
    <main className="content">
      <NewsCardList searchActive={searchActive} isLoading={isLoading} />
      <About />
    </main>
  );
};

export default Main;
