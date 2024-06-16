import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default App;
