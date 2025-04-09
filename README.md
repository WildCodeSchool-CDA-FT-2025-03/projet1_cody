# 🏠 Hive - Home media center

![Hive Logo](./client/public/hive.jpg)

## 📚 À propos du projet

**HIVE** est une application web qui vous permet d'enregistrer votre collection de média et de partagez vos critiques avec les autres utilisateurs.

Vous pouvez gérer vos collections de :

- 🎬 Films
- 🎮 Jeux Vidéo
- 📖 Livres
- 🎵 Musique

Vous pouvez également :

- Partager une critique sur un média (1 critique max. par média)
- S'abonner à la newsletter
- Accéder à votre page "Mon compte" pour:
  - gérer votre collection
  - gérer vos favoris
  - gérer vos critiques

L'application est développée "mobile first". L'interface est donc responsive. La navigation dans le catalogue permet de filtrer et trier selon vos besoins.

## 🤝 Equipe de développement

Développé par [Alexandre Dumout](https://www.linkedin.com/in/alexandre-dumout-317505123/), [Romaric Yi](https://www.linkedin.com/in/yiromaric/) et [Ryan Decian](https://www.linkedin.com/in/ryan-decian-864696302/)

## 🚀 Technologies utilisées

- ⚛️ **React** - Bibliothèque front-end pour la création d'interfaces utilisateur dynamiques
- 🔷 **TypeScript** - Ajout du typage statique pour un code plus robuste
- 🔄 **GraphQL** - Langage de requête pour API flexible et efficace
- 🗃️ **SQLite** - Système de gestion de base de données léger
- 🔌 **TypeORM** - ORM pour TypeScript et JavaScript

## 🛠️ Installation

Pour installer et exécuter ce projet localement, suivez ces étapes :

1. Clonez le dépôt

   ```bash
   git clone https://github.com/WildCodeSchool-CDA-FT-2025-03/projet1_cody.git
   cd home-center
   ```

2. Installez les dépendances au niveau racine

   ```bash
   npm install
   ```

3. Installez les dépendances du serveur

   ```bash
   cd server/
   npm install
   ```

4. Installez les dépendances du client
   ```bash
   cd ../client/
   npm install
   ```

### Convention de commits

Nous utilisons la convention de commits conventionnels :

- `feat: description` pour les nouvelles fonctionnalités
- `fix: description` pour les corrections de bugs
- `docs: description` pour les mises à jour de documentation
- `style: description` pour les changements de style
- `refactor: description` pour les refactorisations de code

## 📝 Justification des choix techniques

### Front-end

- **React avec TypeScript** : Permet un développement modulaire avec typage statique pour réduire les bugs.

### Back-end

- **GraphQL** : Offre une flexibilité dans les requêtes et réduit le sur-fetchin/sous-fetching de données.
- **SQLite avec TypeORM** : Solution légère et simple à configurer pour le stockage des données, avec une abstraction ORM puissante.

---

Ce projet est développé dans le cadre de la Formation "Développeur Concepteur d'Applications" de la Wild Code School
