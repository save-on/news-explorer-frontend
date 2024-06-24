import "./NewsCard.css";

const NewsCard = ({ children, card }) => {
  const { source, title, description, url, urlToImage, publishedAt } = card;

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
      <a className="news-card__link" href={url} target="_blank">
        <img src={urlToImage} alt={title} className="news-card__image" />
        <div className="news-card__information">
          <p className="news-card__publication">
            {handleDateConversion(publishedAt)}
          </p>
          <h2 className="news-card__title">{title}</h2>
          <p className="news-card__description">{description}</p>
          <p className="news-card__source">{source.name}</p>
        </div>
      </a>
      {children}
    </li>
  );
};

export default NewsCard;
