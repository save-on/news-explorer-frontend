import "./NewsCard.css";
import markNormal from "../../assets/mark-normal.svg";
import markHover from "../../assets/mark-hover.svg";
import markFilled from "../../assets/mark-filled.svg";
import { useState } from "react";

const NewsCard = ({ cards }) => {
  const { source, title, description, url, urlToImage, publishedAt } = cards;

  const [saveBtn, setSaveBtn] = useState("unfilled");

  const handleDateConversion = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Date(date).toLocaleDateString("en-US", options);
  };

  const handleBtnClick = () => {
    saveBtn === "unfilled" ? setSaveBtn("filled") : setSaveBtn("unfilled");
  };

  return (
    <div className="news-card">
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
      <button
        type="button"
        onClick={handleBtnClick}
        className={`news-card__save-btn ${
          saveBtn === "filled"
            ? "news-card__save-btn_filled"
            : "news-card__save-btn_normal"
        }`}
      />
      <div className="news-card__save-container">
        <p className="news-card__save-notification">Sign in to save articles</p>
      </div>
    </div>
  );
};

export default NewsCard;
