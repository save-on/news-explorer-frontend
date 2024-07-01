import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

const Main = ({ searchActive }) => {
  return (
    <main className="content">
      <NewsCardList searchActive={searchActive} />
      <About />
    </main>
  );
};

export default Main;
