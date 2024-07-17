import { useContext } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";
import SavedArticlesContext from "../../contexts/SavedArticlesContext";

const SavedNews = ({ setSelectedArticle, handleDelete }) => {
  const { savedArticles } = useContext(SavedArticlesContext);

  const handleSelect = (article) => {
    setSelectedArticle(article);
  };

  return (
    <section className="saved-news">
      {savedArticles.length === 0 ? (
        <></>
      ) : (
        <div className="saved-news__container">
          <ul className="saved-news__articles">
            {savedArticles.map((card) => (
              <NewsCard card={card} key={`${card.title}-${card.publishedAt}`}>
                <button
                  className="news-card__delete-btn"
                  type="button"
                  onMouseEnter={() => {
                    handleSelect(card);
                  }}
                  onClick={() => {
                    handleDelete();
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
