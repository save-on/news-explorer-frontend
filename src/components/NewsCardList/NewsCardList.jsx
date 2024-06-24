import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = ({ cards }) => {
  const [saveBtns, setSaveBtn] = useState(Array(cards.length).fill("unfilled"));

  const handleBtnClick = (index) => {
    const newSaveBtns = saveBtns.map((state, idx) =>
      idx === index ? (state === "unfilled" ? "filled" : "unfilled") : state
    );
    setSaveBtn(newSaveBtns);
  };

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="news-card-list__articles">
        {cards.map((card, index) => {
          return (
            <NewsCard card={card} key={card.source.id}>
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
      <button type="button" className="news-card-list__button">
        Show more
      </button>
    </section>
  );
};

export default NewsCardList;
