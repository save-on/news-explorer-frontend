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
import { useEffect, useState } from "react";

const App = () => {
  const [activePopup, setActivePopup] = useState("");

  useEffect(() => {
    if (!activePopup) return;

    const handleEscClick = (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscClick);

    return () => {
      document.removeEventListener("keydown", handleEscClick);
    };
  }, [activePopup]);

  const handleSignInClick = () => {
    setActivePopup("sign-in");
  };

  const handleSignUpClick = () => {
    setActivePopup("sign-up");
  };

  const closePopup = () => {
    setActivePopup("");
  };

  return (
    <div className="app">
      <div className="app__content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header handleSignInClick={handleSignInClick} />
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
      <SignInPopup
        activePopup={activePopup}
        closePopup={closePopup}
        handleSignUpClick={handleSignUpClick}
      />
      <SignUpPopup
        activePopup={activePopup}
        closePopup={closePopup}
        handleSignInClick={handleSignInClick}
      />
    </div>
  );
};

export default App;

// you can build register successful popup later but start functionality of modals opening and closing
