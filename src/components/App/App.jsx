import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import { cards } from "../../utils/constants"; //temporary

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <Main cards={cards} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
