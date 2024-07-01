import "./NoResults.css";
import noResultsImage from "../../assets/not-found_v1.png";

const NoResults = () => {
  return (
    <div className="no-results">
      <div className="no-results__container">
        <img
          src={noResultsImage}
          alt="no results"
          className="no-results__image"
        />
        <h2 className="no-results__title">Nothing Found</h2>
        <p className="no-results__description">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </div>
  );
};

export default NoResults;
