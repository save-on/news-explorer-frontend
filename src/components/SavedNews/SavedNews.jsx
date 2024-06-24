import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

const SavedNews = ({ cards }) => {
  return (
    <section className="saved-news">
      <ul className="saved-news__articles">
        {cards.map((card) => (
          <NewsCard card={card} key={card.source.id}>
            <button className="news-card__delete-btn" type="button" />
            <p className="news-card__delete-notification">Remove from saved</p>
            <p className="news-card__keyword">nature</p>
          </NewsCard>
        ))}
      </ul>
    </section>
  );
};

export default SavedNews;
