# Convention de Nommage du Projet

### 1. Généralités

Utiliser l'anglais pour tous les noms de fichiers, dossiers, variables, fonctions et classes.

Respecter une uniformité dans le style de nommage (camelCase, PascalCase, kebab-case, snake_case).

Ne pas utiliser d'espaces ou de caractères spéciaux (hors underscore et tiret si nécessaire).

### 2. Nommage des Dossiers

Les dossiers doivent être en kebab-case (ex: components, utils, services).

Les dossiers spécifiques peuvent être préfixés si nécessaire (ex: api-routes/, models/).

### 3. Nommage des Fichiers

Les fichiers JavaScript/TypeScript doivent être en camelCase pour les fichiers fonctionnels (`fetchData.ts`).

Les fichiers React composants doivent être en PascalCase (`HomePage.tsx`).

Les fichiers CSS doivent être en kebab-case (`global-styles.css`).

Les fichiers de configuration doivent être en snake_case (`config_database.ts`).

### 4. Nommage des Variables

Utiliser le camelCase pour les variables locales et globales (`userName`, `fetchData`).

Utiliser des noms descriptifs (`isLoading` au lieu de `load`).

Préfixer les booléens par `is`, `has`, `can` (`isActive`, `hasPermission`).

### 5. Nommage des Fonctions

Utiliser le camelCase (`fetchUserData`, `handleClick`).

Commencer par un verbe décrivant l'action (`get`, `set`, `fetch`, `handle`).

### 6. Nommage des Classes

Utiliser le PascalCase (`UserService`, `DatabaseConnection`).

### 7. Nommage des Interfaces et Types

Préfixer les interfaces par un `I` (`IUser`, `IProduct`).

Utiliser PascalCase pour les types (`UserType`,` OrderStatus`).

### 8. Nommage des Routes API

Utiliser kebab-case (`/api/users`, `/api/orders/new`).

### 9. Nommage des Bases de Données

Utiliser `snake_case` pour les noms de tables et colonnes (`users`, `order_details`).

Utiliser le singulier pour les tables (`user` au lieu de `users`).

Clés primaires : `id`

Clés étrangères : `<nom_table>_id` (`user_id`, `order_id`).

### 10. Nommage des Commits Git

Utiliser un préfixe décrivant le type de modification :

`[FEAT]`: pour une nouvelle fonctionnalité.

`[FIX]`: pour une correction de bug.

`[DOCS]`: pour une modification de documentation.

`[STYLE]`: pour une modification de mise en forme (ESLint, formatage).

`[REFACTOR]`: pour une amélioration de code sans changement de comportement.

`[TEST]`: pour l'ajout ou modification de tests.

### 11. Nommage des Branches Git

Exemple de branche `feature@u.1.0-navbar/adt`

Préfixer selon l'objectif :

`feature@` pour une nouvelle fonctionnalité.

`bugfix@` pour la correction d’un bug.

`hotfix@` pour une correction urgente en production.

`docs@` pour la documentation.

UserStories :
`u.0.1.0-navbar`

Responsable de la branche:
`/adt` (Alexandre)
`/ryi` (Romaric)
`/rdn` (Ryan)

### 12. Bonnes Pratiques

- Toujours s'assurer que les noms sont explicites.

- Éviter les abréviations inutiles (`usr` au lieu de `user`).

- Cohérence dans tout le projet.

- Éviter le code mort : tout code inutilisé doit être supprimé.

- Les @media doivent être directement placées à la suite de la classe concernée, sans saut de ligne.

✅ Exemple correct :

```
.card {
  padding: 1rem;
  background-color: white;
}
@media (max-width: 768px) {
  .card {
    padding: 0.5rem;
  }
}
```

❌ Exemple incorrect :

```
.card {
  padding: 1rem;
  background-color: white;
}

@media (max-width: 768px) {
  .card {
    padding: 0.5rem;
  }
}
```
