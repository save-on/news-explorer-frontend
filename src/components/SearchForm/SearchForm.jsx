import "./SearchForm.css";
import { getNews } from "../../utils/newsApi";
import { useForm } from "../../hooks/useForm";
import { useContext, useEffect } from "react";
import CardsListContext from "../../contexts/CardsListContext";
import { setSearch } from "../../utils/storage";

const SearchForm = ({
  handleSubmit,
  setSearchActive,
  currentKeyword,
  setCurrentKeyword,
}) => {
  const { setCardsList } = useContext(CardsListContext);
  const { values, handleChanges, setValues } = useForm({
    search: currentKeyword || "",
  });

  useEffect(() => {
    setValues({
      search: currentKeyword || "",
    });
  }, [currentKeyword]);

  const handleGetNews = (e) => {
    e.preventDefault();
    const makeRequest = () => {
      return getNews(values.search).then((data) => {
        data.articles.forEach((article) => {
          article.isSaved = false;
          article.keyword = "";
        });
        setCardsList(data.articles);
        setCurrentKeyword(values.search);
        setSearch(values.search);
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
