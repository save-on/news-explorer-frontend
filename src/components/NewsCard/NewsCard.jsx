import "./NewsCard.css";

const NewsCard = ({ children, card }) => {
  const handleDateConversion = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <li className="news-card">
      <a className="news-card__link" href={card.url} target="_blank">
        <img
          src={card.urlToImage}
          alt={card.title}
          className="news-card__image"
        />
        <div className="news-card__information">
          <p className="news-card__publication">
            {handleDateConversion(card.publishedAt)}
          </p>
          <h2 className="news-card__title">{card.title}</h2>
          <p className="news-card__description">{card.description}</p>
          <p className="news-card__source">{card.source.name}</p>
        </div>
      </a>
      {children}
    </li>
  );
};

export default NewsCard;
