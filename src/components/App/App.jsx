import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import { Routes, Route } from "react-router-dom";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import SuccessModal from "../SuccessModal/SuccessModal";
import { useEffect, useState } from "react";
import CardsListContext from "../../contexts/CardsListContext";

const App = () => {
  const [activePopup, setActivePopup] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [cardsList, setCardsList] = useState([]);

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

  const handleRegisteredClick = () => {
    // add this to a successful sign up submit
    setActivePopup("registered");
  };

  const handleSubmit = (request) => {
    setIsLoading(true);
    request()
      .then()
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleSignUpClick = () => {
    setActivePopup("sign-up");
  };

  const closePopup = () => {
    setActivePopup("");
  };

  return (
    <div className="app">
      <CardsListContext.Provider value={{ cardsList, setCardsList }}>
        <div className="app__content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    handleSignInClick={handleSignInClick}
                    handleSubmit={handleSubmit}
                    setSearchActive={setSearchActive}
                  />
                  <Main searchActive={searchActive} />
                </>
              }
            />
            <Route
              path="/saved-news"
              element={
                <>
                  <SavedNewsHeader />
                  <SavedNews />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </CardsListContext.Provider>
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
      <SuccessModal
        activePopup={activePopup}
        closePopup={closePopup}
        onNavClick={handleSignInClick}
      />
    </div>
  );
};

export default App;

// you can build register successful popup later but start functionality of modals opening and closing
