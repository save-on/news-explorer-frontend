import { useContext } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";
import CardsListContext from "../../contexts/CardsListContext";

const SavedNews = () => {
  const { cardsList } = useContext(CardsListContext);

  return (
    <section className="saved-news">
      <div className="saved-news__container">
        <ul className="saved-news__articles">
          {cardsList.map((card) => (
            <NewsCard card={card} key={card.source.id}>
              <button className="news-card__delete-btn" type="button" />
              <p className="news-card__delete-notification">
                Remove from saved
              </p>
              <p className="news-card__keyword">nature</p>
            </NewsCard>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SavedNews;