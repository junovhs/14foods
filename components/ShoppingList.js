/* components/ShoppingList.js */

const ShoppingList = () => {
  return `
    <div class="section-content">
      <h2>Your Minimalist Shopping List</h2>
      <p>Just 14 core ingredients (plus optional flavor enhancers) to fuel your "Greek God" transformation.</p>

      <div class="shopping-categories">
        <div class="category-group">
          <h3 class="category-title">Grains & Seeds</h3>
          <ul class="ingredient-list">
            <li class="ingredient-item">
              <span class="ingredient-name">Quinoa</span>
              <span class="ingredient-nutritional-socket">Carbs/Fiber, Protein</span>
            </li>
            <li class="ingredient-item">
              <span class="ingredient-name">Oats</span>
              <span class="ingredient-nutritional-socket">Carbs/Fiber, Protein</span>
            </li>
          </ul>
        </div>

        <div class="category-group">
          <h3 class="category-title">Legumes & "Dairy" & Yeast</h3>
          <ul class="ingredient-list">
            <li class="ingredient-item">
              <span class="ingredient-name">Chickpeas</span>
              <span class="ingredient-nutritional-socket">Protein, Carbs/Fiber</span>
            </li>
             <li class="ingredient-item">
              <span class="ingredient-name">Nutritional Yeast</span>
              <span class="ingredient-nutritional-socket">Vitamins/Minerals, Protein</span>
            </li>
             <li class="ingredient-item">
              <span class="ingredient-name">Soy Milk (Unsweetened)</span>
              <span class="ingredient-nutritional-socket">Protein, Healthy Fats</span>
            </li>
          </ul>
        </div>

        <div class="category-group">
          <h3 class="category-title">Proteins</h3>
          <ul class="ingredient-list">
            <li class="ingredient-item">
              <span class="ingredient-name">Tofu (Firm or Extra-Firm)</span>
              <span class="ingredient-nutritional-socket">Protein, Healthy Fats</span>
            </li>
             <li class="ingredient-item">
              <span class="ingredient-name">Lentils (Green or Brown)</span>
              <span class="ingredient-nutritional-socket">Protein, Carbs/Fiber</span>
            </li>
          </ul>
        </div>

        <div class="category-group">
          <h3 class="category-title">Healthy Fats & Nuts</h3>
          <ul class="ingredient-list">
            <li class="ingredient-item">
              <span class="ingredient-name">Avocado</span>
              <span class="ingredient-nutritional-socket">Healthy Fats, Vitamins/Minerals</span>
            </li>
            <li class="ingredient-item">
              <span class="ingredient-name">Almonds (Raw, Unsalted)</span>
              <span class="ingredient-nutritional-socket">Healthy Fats, Protein</span>
            </li>
            <li class="ingredient-item">
              <span class="ingredient-name">Chia Seeds</span>
              <span class="ingredient-nutritional-socket">Healthy Fats, Fiber</span>
            </li>
          </ul>
        </div>

        <div class="category-group">
          <h3 class="category-title">Vegetables</h3>
          <ul class="ingredient-list">
            <li class="ingredient-item">
              <span class="ingredient-name">Broccoli</span>
              <span class="ingredient-nutritional-socket">Vitamins/Minerals, Fiber</span>
            </li>
            <li class="ingredient-item">
              <span class="ingredient-name">Spinach</span>
              <span class="ingredient-nutritional-socket">Vitamins/Minerals, Fiber</span>
            </li>
            <li class="ingredient-item">
              <span class="ingredient-name">Sweet Potatoes</span>
              <span class="ingredient-nutritional-socket">Carbs/Fiber, Vitamins/Minerals</span>
            </li>
            <li class="ingredient-item">
              <span class="ingredient-name">Onions</span>
              <span class="ingredient-nutritional-socket">Vitamins/Minerals, Flavor</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;
};

export default ShoppingList;