import { useContext } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";
import CardsListContext from "../../contexts/CardsListContext";

const SavedNews = ({ savedArticles, setSavedArticles }) => {
  const { cardsList } = useContext(CardsListContext);

  const handleDeleteClick = (card) => {
    savedArticles.forEach((article, i) => {
      if (card.title === article.title) {
        const newSavedArticles = [...savedArticles];
        newSavedArticles.splice(i, 1);
        setSavedArticles(newSavedArticles);
        card.isSaved = false;
      }
    });
  };

  return (
    <section className="saved-news">
      {cardsList.length === 0 ? (
        <></>
      ) : (
        <div className="saved-news__container">
          <ul className="saved-news__articles">
            {savedArticles.map((card) => (
              <NewsCard card={card} key={`${card.title}-${card.publishedAt}`}>
                <button
                  className="news-card__delete-btn"
                  type="button"
                  onClick={() => {
                    handleDeleteClick(card);
                  }}
                />
                <p className="news-card__delete-notification">
                  Remove from saved
                </p>
                <p className="news-card__keyword">{card.keyword}</p>
              </NewsCard>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default SavedNews;
