import { useContext, useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import CardsListContext from "../../contexts/CardsListContext";
import NoResults from "../NoResults/NoResults";
import PreLoader from "../PreLoader/PreLoader";

const NewsCardList = ({
  searchActive,
  isLoading,
  isLoggedIn,
  currentKeyword,
  setSavedArticles,
  savedArticles,
}) => {
  const { cardsList } = useContext(CardsListContext);
  const [visibleArticles, setVisibleArticles] = useState(3);

  const handlePrevSaves = (card) => {
    savedArticles.forEach((article) => {
      if (card.title === article.title) {
        card.isSaved = true;
      }
    });
  };

  const handleShowMore = () => {
    setVisibleArticles((articles) => articles + 3);
  };

  const handleSaveClick = (card) => {
    if (card.isSaved) {
      return;
    }
    card.isSaved = true;
    card.keyword = currentKeyword;
    setSavedArticles((prev) => [...prev, card]);
  };

  const handleSaveBtnClass = (isSaved) =>
    isSaved ? "news-card__save-btn_filled" : "news-card__save-btn_normal";

  return (
    <section className="news-card-list">
      {isLoading ? (
        <PreLoader />
      ) : searchActive ? (
        cardsList.length === 0 ? (
          <NoResults />
        ) : (
          <div className="news-card-list__container">
            <h2 className="news-card-list__title">Search results</h2>
            <ul className="news-card-list__articles">
              {cardsList.slice(0, visibleArticles).map((card) => {
                handlePrevSaves(card);
                return (
                  <NewsCard
                    card={card}
                    key={`${card.title}-${card.publishedAt}`}
                  >
                    <button
                      type="button"
                      className={`news-card__save-btn ${handleSaveBtnClass(
                        card.isSaved
                      )}`}
                      onClick={() => {
                        if (isLoggedIn) {
                          handleSaveClick(card);
                        }
                      }}
                    />
                    {!isLoggedIn ? (
                      <p className="news-card__save-notification">
                        Sign in to save articles
                      </p>
                    ) : null}
                  </NewsCard>
                );
              })}
            </ul>
            <button
              type="button"
              className="news-card-list__button"
              onClick={handleShowMore}
            >
              Show more
            </button>
          </div>
        )
      ) : null}
    </section>
  );
};

export default NewsCardList;
