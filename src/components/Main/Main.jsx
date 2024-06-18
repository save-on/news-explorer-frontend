import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

const Main = ({ cards }) => {
  return (
    <main className="content">
      <NewsCardList cards={cards} />
      <About />
    </main>
  );
};

export default Main;
