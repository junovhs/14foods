/* app.js */
import Hero from './components/Hero.js';
import Philosophy from './components/Philosophy.js';
// ShoppingList removed
import IngredientSubstitution from './components/IngredientSubstitution.js';
import Recipes from './components/Recipes.js';
import WeeklyPrep from './components/WeeklyPrep.js';
import NutritionalCoverage from './components/NutritionalCoverage.js';
import Adaptations from './components/Adaptations.js';
import FAQ from './components/FAQ.js';
import Footer from './components/Footer.js';

// Global substitution state (using default “Standard” values)
window.substitutions = {
  "Rolled Oats": "Rolled Oats",
  "Fortified Plant-Based Milk": "Fortified Plant-Based Milk",
  "Chia Seeds": "Chia Seeds",
  "Almonds/Almond Butter": "Almonds/Almond Butter",
  "Nutritional Yeast": "Nutritional Yeast",
  "Brown Rice": "Brown Rice",
  "Lentils": "Lentils",
  "Spinach": "Spinach",
  "Tomatoes": "Tomatoes",
  "Bell Peppers": "Bell Peppers",
  "Avocado": "Avocado",
  "Firm Tofu": "Firm Tofu",
  "Quinoa": "Quinoa",
  "Broccoli": "Broccoli"
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hero').innerHTML = Hero();
  document.getElementById('philosophy').innerHTML = Philosophy();
  // Shopping list section removed
  document.getElementById('ingredient-substitution').innerHTML = IngredientSubstitution();
  document.getElementById('recipes').innerHTML = Recipes();
  document.getElementById('weekly-prep').innerHTML = WeeklyPrep();
  document.getElementById('nutritional-coverage').innerHTML = NutritionalCoverage();
  document.getElementById('adaptations').innerHTML = Adaptations();
  document.getElementById('faq').innerHTML = FAQ();
  FAQ.init(); // Initialize FAQ interactivity
  document.getElementById('footer').innerHTML = Footer();

  // Global function to update the recipes when substitutions change
  window.updateRecipes = () => {
    document.getElementById('recipes').innerHTML = Recipes();
  };
});
