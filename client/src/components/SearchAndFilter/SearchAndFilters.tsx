import { ChangeEvent } from "react";
import { useState } from "react";
import searchIcon from "../../assets/icons/search.svg";

import styles from "./SearchAndFilters.module.css";

type SearchAndFiltersProps = {
  refetch: (params: { search?: string, sort?: string, asc?: string }) => void;
  contentType: string;
};

type initform = {
  search: string;
  genre: string;
  sortBy: string;
}

function SearchAndFilters({
  refetch, contentType
}: SearchAndFiltersProps) {
  const [newForm, setNewForm] = useState<initform>({search:"", genre: "", sortBy: ""});

  return (
    <div className={styles.searchAndFilters}>
      <div className={styles.searchBarContainer}>
        <label htmlFor="search" className={styles.visuallyHidden}>
          Rechercher {contentType}
        </label>
        <input
          className={styles.searchBar}
          id="search"
          type="text"
          placeholder={`Rechercher ${contentType}`}
          value={newForm.search}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setNewForm(() => ({
              ...newForm,
              search: event.target.value,
            }));
            refetch({
              search: event.target.value, // Correctly fetches based on input value
            });
          }
          }
        />
        <img src={searchIcon} alt="Rechercher" className={styles.searchIcon} />
      </div>
      <div className={styles.filtersContainer}>
        <label htmlFor="genre" className={styles.visuallyHidden}>
          Filtrer par genre
        </label>
        <select className={styles.filters} name="genre" id="genre">
          <option value="all">Tous</option>
        </select>
        <label htmlFor="sortBy" className={styles.sortByLabel}>
          Trier par
        </label>
        <select
          className={styles.sortBy}
          name="sortBy"
          value={newForm.sortBy}
          id="sortBy"
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            let sort = "";
            let asc ="";
            
            setNewForm(() => ({
              ...newForm,
              sortBy: event.target.value,
            }));

            switch(event.target.value) {
            case "alphabetical":
              sort = "title";
              asc = "ASC";
              break;
            case "alphabetical-reverse":
              sort = "title";
              asc = "DESC";
              break;
            case "date-recent":
              sort = "id";
              asc = "DESC";
              break;
            case "date-old":
              sort = "id";
              asc = "ASC";
              break;
            }

            refetch({
              sort: sort, // Correctly fetches based on input value
              asc: asc,
            });
          }
          }
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
