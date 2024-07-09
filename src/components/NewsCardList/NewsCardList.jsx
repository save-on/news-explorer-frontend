import { useContext, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import CardsListContext from "../../contexts/CardsListContext";
import NoResults from "../NoResults/NoResults";
import PreLoader from "../PreLoader/PreLoader";
import { getSavedArticles } from "../../stub/api";
import SavedArticlesContext from "../../contexts/SavedArticlesContext";

const NewsCardList = ({ searchActive, isLoading, currentKeyword }) => {
  const { cardsList } = useContext(CardsListContext);
  const { savedArticles, setSavedArticles } = useContext(SavedArticlesContext);

  const [visibleArticles, setVisibleArticles] = useState(3);

  const handleShowMore = () => {
    setVisibleArticles((articles) => articles + 3);
  };

  const handleSaveClick = (card) => {
    if (currentKeyword) {
      getSavedArticles(card).then((data) => {
        data.keyword = currentKeyword;
        setSavedArticles((prev) => [...prev, data]);
      });
    }
  };

  return (
    <section className="news-card-list">
      {isLoading ? (
        <PreLoader />
      ) : searchActive ? (
        cardsList.length === 0 ? (
          <NoResults />
        ) : (
          <>
            <ul className="news-card-list__articles">
              <h2 className="news-card-list__title">Search results</h2>
              {cardsList.slice(0, visibleArticles).map((card) => {
                return (
                  <NewsCard
                    card={card}
                    key={`${card.title}-${card.publishedAt}`}
                  >
                    <button
                      type="button"
                      className="news-card__save-btn news-card__save-btn_normal"
                      onClick={() => {
                        handleSaveClick(card);
                      }}
                    />

                    <p className="news-card__save-notification">
                      Sign in to save articles
                    </p>
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
          </>
        )
      ) : (
        <></>
      )}
    </section>
  );
};

export default NewsCardList;
