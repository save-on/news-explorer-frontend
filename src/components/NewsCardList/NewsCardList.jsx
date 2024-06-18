import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = ({ cards }) => {
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="news-card-list__articles">
        {cards.map((card) => {
          return <NewsCard card={card} key={card.source.id} />;
        })}
      </ul>
      <button type="button" className="news-card-list__button">
        Show more
      </button>
    </section>
  );
};

export default NewsCardList;
