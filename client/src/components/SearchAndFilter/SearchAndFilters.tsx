import { ChangeEvent } from "react";

import { GenreType } from "../../types/GenreType";

import searchIcon from "../../assets/icons/search.svg";

import styles from "./SearchAndFilters.module.css";

type SearchAndFiltersProps = {
  genreOptions: GenreType[];
  searchText: string;
  onSortChange: (sortOption: string) => void;
  onSearchChange?: (searchValue: string) => void;
  searchValue?: string;
};

function SearchAndFilters({
  searchText,
  genreOptions,
  onSearchChange,
  onSortChange,
  searchValue = "",
}: SearchAndFiltersProps) {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };
        
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
          value={searchValue}
          onChange={handleSearchChange}
        />
        <img src={searchIcon} alt="Rechercher" className={styles.searchIcon} />
      </div>
      <div className={styles.filtersContainer}>
        <label htmlFor="genre" className={styles.visuallyHidden}>
          Filtrer par genre
        </label>
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
        <select
          className={styles.sortBy}
          name="sortBy"
          id="sortBy"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="alphabetical">Ordre alphabétique</option>
          <option value="alphabetical-reverse">Ordre alphabétique inverse</option>
          <option value="date-recent">Plus récent</option>
          <option value="date-old">Plus ancien</option>
        </select>
      </div>
    </div>
  );
}

export default SearchAndFilters;
