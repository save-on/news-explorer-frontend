import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <About />
      </div>
    </div>
  );
};

export default App;
