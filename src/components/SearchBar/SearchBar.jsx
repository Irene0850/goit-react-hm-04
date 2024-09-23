import css from "./SearchBar.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(query);
    setQuery("");
  };
  return (
    <div className={css.box}>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            onChange={handleChange}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
          <button type="submit" className="css.button">
            <FontAwesomeIcon icon={faSearch} className={css.btn} />
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
