import "./SearchForm.css";
import { getNews } from "../../utils/newsApi";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import CardsListContext from "../../contexts/CardsListContext";

const SearchForm = ({ handleSubmit, setSearchActive, setCurrentKeyword }) => {
  const { setCardsList } = useContext(CardsListContext);
  const { values, handleChanges } = useForm({
    search: "",
  });

  const handleGetNews = (e) => {
    e.preventDefault();
    const makeRequest = () => {
      return getNews(values.search).then((data) => {
        setCardsList(data.articles);
        setCurrentKeyword(values.search);
        setSearchActive(true);
      });
    };
    handleSubmit(makeRequest);
  };

  return (
    <form className="search-form">
      <input
        id="search"
        type="text"
        className="search-form__search-bar"
        placeholder="Enter topic"
        name="search"
        value={values.search}
        onChange={handleChanges}
      />
      <button
        className="search-form__search-btn"
        type="submit"
        onClick={handleGetNews}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
