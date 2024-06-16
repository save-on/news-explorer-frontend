import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form className="search-form">
      <input
        type="text"
        className="search-form__search-bar"
        placeholder="Enter topic"
      />
      <button className="search-form__search-btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
