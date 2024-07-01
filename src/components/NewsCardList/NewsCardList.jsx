import { useContext, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import CardsListContext from "../../contexts/CardsListContext";

const NewsCardList = ({ searchActive }) => {
  const { cardsList } = useContext(CardsListContext);
  const [saveBtns, setSaveBtn] = useState(
    Array(cardsList.length).fill("unfilled")
  );
  const [visibleArticles, setVisibleArticles] = useState(3);

  const handleShowMore = () => {
    setVisibleArticles((articles) => articles + 3);
  };

  const handleBtnClick = (index) => {
    const newSaveBtns = saveBtns.map((state, idx) =>
      idx === index ? (state === "unfilled" ? "filled" : "unfilled") : state
    );
    setSaveBtn(newSaveBtns);
  };

  return (
    <section className="news-card-list">
      {searchActive ? (
        cardsList.length === 0 ? (
          <p>No articles</p>
        ) : (
          <>
            <ul className="news-card-list__articles">
              <h2 className="news-card-list__title">Search results</h2>
              {cardsList.slice(0, visibleArticles).map((card, index) => {
                return (
                  <NewsCard
                    card={card}
                    key={`${card.title}-${card.publishedAt}`}
                  >
                    <button
                      type="button"
                      onClick={() => handleBtnClick(index)}
                      className={`news-card__save-btn ${
                        saveBtns[index] === "filled"
                          ? "news-card__save-btn_filled"
                          : "news-card__save-btn_normal"
                      }`}
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

// style no results found and preloader and get those working
