import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import { cards } from "../../utils/constants"; //temporary
import { Routes, Route } from "react-router-dom";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main cards={cards} />
              </>
            }
          />
          <Route
            path="/saved-news"
            element={
              <>
                <SavedNewsHeader />
                <SavedNews cards={cards} />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
      {/* <SignInPopup /> */}
      <SignUpPopup />
    </div>
  );
};

export default App;
