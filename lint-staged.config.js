// lint-staged.config.js
export default {
    'client/**/*.{ts,tsx}': ['npm --prefix client run lint:fix'],
  };
  