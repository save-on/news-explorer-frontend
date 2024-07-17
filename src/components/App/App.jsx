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
  const [selectedArticle, setSelectedArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [cardsList, setCardsList] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState();
  const [currentUser, setCurrentUser] = useState({
    name: "",
    id: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const handleSaved = () => {};

  const handleDelete = () => {
    const newSaved = savedArticles.toSpliced(
      savedArticles.indexOf(selectedArticle),
      1
    );
    setSavedArticles(newSaved);
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
                      isLoggedIn={isLoggedIn}
                    />
                    <Main
                      searchActive={searchActive}
                      isLoading={isLoading}
                      currentKeyword={currentKeyword}
                      isLoggedIn={isLoggedIn}
                    />
                  </>
                }
              />
              <Route
                path="/saved-news"
                element={
                  <>
                    <SavedNewsHeader />
                    <SavedNews
                      setSelectedArticle={setSelectedArticle}
                      handleDelete={handleDelete}
                    />
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
  - grab search info from the localStorage (use a hook)
  - if there's an error put the following message in an error block
  "Sorry, something went wrong during the request. There may be a 
  connection issue or the server may be down. Please try again later."
  - adapt the website to fit all screen sizes
  - be sure all images have an alt
  - get saved article fill to work
  - fix the duplicate saved articles problem
  - make sure all btns and comps have a loading effect
  - make sure signup works
  - fill in currentUser in all locations applicable
 */
