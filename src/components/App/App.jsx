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
import { getSearch } from "../../utils/storage";

const App = () => {
  const [activePopup, setActivePopup] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [cardsList, setCardsList] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [currentUser, setCurrentUser] = useState({
    name: "",
    id: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true); // change back to false
  const [savedArticles, setSavedArticles] = useState([]);

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

  useEffect(() => {
    const search = getSearch();
    if (search === null) {
      return;
    }
    setCurrentKeyword(search);
  }, []);

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
      .then(closePopup)
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
                    isLoggedIn={isLoggedIn}
                    currentKeyword={currentKeyword}
                    setCurrentKeyword={setCurrentKeyword}
                  />
                  <Main
                    searchActive={searchActive}
                    isLoading={isLoading}
                    isLoggedIn={isLoggedIn}
                    currentKeyword={currentKeyword}
                    setSavedArticles={setSavedArticles}
                    savedArticles={savedArticles}
                  />
                </>
              }
            />
            <Route
              path="/saved-news"
              element={
                <>
                  <SavedNewsHeader savedArticles={savedArticles} />
                  <SavedNews savedArticles={savedArticles} />
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
        handleSubmit={handleSubmit}
        setIsLoggedIn={setIsLoggedIn}
        setCurrentUser={setCurrentUser}
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
/*
  Todo List
  - if there's an error put the following me
  message in an error block
  "Sorry, something went wrong during the request. There may be a 
  connection issue or the server may be down. Please try again later."
  - adapt the website to fit all screen sizes
  - be sure all images have an alt
  - get saved article fill to work and get it to render when rendering
  - make sure all btns and comps have a loading effect
  - make sure signup worksk
  - fill in currentUser in all locations applicable
  - change signin button to be the signout button upon signing in
  - if you aren't signed in you can't save an article
  - get delete to render upon clicking the delete button

 */
