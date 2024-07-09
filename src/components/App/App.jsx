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
import SavedArticlesContext from "../../contexts/SavedArticlesContext";

const App = () => {
  const [activePopup, setActivePopup] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [cardsList, setCardsList] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState();

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
        <SavedArticlesContext.Provider
          value={{ savedArticles, setSavedArticles }}
        >
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
                      setCurrentKeyword={setCurrentKeyword}
                    />
                    <Main
                      searchActive={searchActive}
                      isLoading={isLoading}
                      currentKeyword={currentKeyword}
                    />
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
        </SavedArticlesContext.Provider>
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
/*
  Todo List
  - grab search info from the localStorage (use a hook)
  x stub out the saved articles and get that working
  x use search keyword and and put it on the keyword section of the 
  saved articles card
  - hide saved articles for users that aren't signed in
  - if there's an error put the following message in an error block
  "Sorry, something went wrong during the request. There may be a 
  connection issue or the server may be down. Please try again later."
  - adapt the website to fit all screen sizes
  - be sure all images have an alt
  - make it so that when users aren't signed in on hover they see that 
  you have to sign in to save articles
 */
