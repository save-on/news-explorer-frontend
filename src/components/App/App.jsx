import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import { Routes, Route, useLocation } from "react-router-dom";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import SuccessModal from "../SuccessModal/SuccessModal";
import { useEffect, useState } from "react";
import CardsListContext from "../../contexts/CardsListContext";
import { getSearch } from "../../utils/storage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [focus, setFocus] = useState("");

  let location = useLocation();

  useEffect(() => {
    setFocus(location.pathname);
  }, [location]);

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

  const handleSignOutClick = () => {
    setCurrentUser({ name: "", id: "" });
    setIsLoggedIn(false);
  };

  const handleRegisteredClick = () => {
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

  const handleMobileMenuClick = () => {
    setActivePopup("mobile-menu");
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
                    handleSignOutClick={handleSignOutClick}
                    handleSubmit={handleSubmit}
                    setSearchActive={setSearchActive}
                    isLoggedIn={isLoggedIn}
                    currentKeyword={currentKeyword}
                    setCurrentKeyword={setCurrentKeyword}
                    currentUser={currentUser}
                    handleMobileMenuClick={handleMobileMenuClick}
                    activePopup={activePopup}
                    closePopup={closePopup}
                    focus={focus}
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
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNewsHeader
                    savedArticles={savedArticles}
                    isLoggedIn={isLoggedIn}
                    currentUser={currentUser}
                    handleSignOutClick={handleSignOutClick}
                    handleMobileMenuClick={handleMobileMenuClick}
                    activePopup={activePopup}
                    closePopup={closePopup}
                  />
                  <SavedNews
                    savedArticles={savedArticles}
                    setSavedArticles={setSavedArticles}
                  />
                </ProtectedRoute>
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
        isLoading={isLoading}
      />
      <SignUpPopup
        activePopup={activePopup}
        closePopup={closePopup}
        handleSignInClick={handleSignInClick}
        handleRegisteredClick={handleRegisteredClick}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
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
