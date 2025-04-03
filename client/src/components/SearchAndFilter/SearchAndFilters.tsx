import searchIcon from "../../assets/icons/search.svg";

import styles from "./SearchAndFilters.module.css";

interface Genre {
  value: string;
  label: string;
}

interface SearchAndFiltersProps {
  genreOptions: Genre[];
  searchText: string;
}

function SearchAndFilters({ genreOptions, searchText }: SearchAndFiltersProps) {
  return (
    <div className={styles.searchAndFilters}>
      <div className={styles.searchBarContainer}>
        <label htmlFor="search" className={styles.visuallyHidden}>
          Rechercher {searchText}
        </label>
        <input
          className={styles.searchBar}
          id="search"
          type="text"
          placeholder={`Rechercher ${searchText}`}
        />
        <img src={searchIcon} alt="Rechercher" className={styles.searchIcon} />
      </div>

      <div className={styles.filtersContainer}>
        <select className={styles.filters} name="genre" id="genre">
          <option value="all">Tous</option>
          {genreOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <label htmlFor="sortBy" className={styles.sortByLabel}>
          Trier par
        </label>
        <select className={styles.sortBy} name="sortBy" id="sortBy">
          <option value="title">Titre</option>
          <option value="date">Date</option>
          <option value="rating">Note</option>
        </select>
      </div>
    </div>
  );
}

export default SearchAndFilters;
