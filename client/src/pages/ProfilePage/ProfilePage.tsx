import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/Router";
// Components
import TitleAndBtnReturn from "../../components/ContentTitleAndBtnReturn/ContentTitleAndBtnReturn";
import ContentList from "../../components/ContentList/ContentList";
import SearchAndFilters from "../../components/SearchAndFilter/SearchAndFilters";
// Types
import { ContentType } from "../../types/ContentType";
import { ProfileCategory } from "../../types/ProfileCategory";
// Styles
import styles from "./ProfilePage.module.css";

// Fake data pour simuler un utilisateur administrateur
const isAdmin = true;

// Options pour le sélecteur de catégorie
const categoryOptions = [
  { value: ProfileCategory.Collection, label: "Ma collection" },
  { value: ProfileCategory.Favorites, label: "Mes favoris" },
  { value: ProfileCategory.Reviews, label: "Mes critiques" },
];

function ProfilePage() {
  // État pour le sélecteur de catégorie
  const [category, setCategory] = useState<ProfileCategory>(ProfileCategory.Collection);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("alphabetical");

  // Ajouter l'option de gestion des critiques pour les administrateurs
  if (isAdmin) {
    categoryOptions.push({ value: ProfileCategory.ManageReviews, label: "Gérer les critiques" });
  }

  // Déterminer le type de contenu à afficher selon la catégorie sélectionnée
  const getContentType = () => {
    return ContentType.Profile;
  };

  return (
    <section className={styles.profilePage}>
      <TitleAndBtnReturn title="Mon compte" />

      <div className={styles.categorySelector}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as ProfileCategory)}
          className={styles.categorySelect}
        >
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {isAdmin && (
          <button className={styles.addMediaButton}>
            <Link className={styles.addMediaButtonLink} to={ROUTES.ADD_MEDIA}>
              Ajouter un média
            </Link>
          </button>
        )}
      </div>

      <SearchAndFilters
        searchText="un contenu"
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        genreOptions={[]}
        onSortChange={setSortOption}
      />

      <ContentList
        contentType={getContentType()}
        sortOption={sortOption}
        searchQuery={searchQuery}
      />
    </section>
  );
}

export default ProfilePage;
