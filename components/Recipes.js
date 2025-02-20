/* components/Recipes.js */
const Recipes = () => {
  const sub = window.substitutions;
  // Use global variable to track the current selected recipe; default to "breakfast"
  const currentRecipeId = window.currentRecipeId || "breakfast";

  // Define recipe data with id, title, tag, description, ingredients, and prep text
  const recipesData = [
    {
      id: "breakfast",
      title: "Savory Protein Overnight Oats",
      tag: "Breakfast (22g protein)",
      description: "A hearty, savory oats recipe to kickstart your day.",
      ingredients: `
        <ul>
          <li>1 cup ${sub["Rolled Oats"] || "Rolled Oats"}</li>
          <li>1 cup ${sub["Fortified Plant-Based Milk"] || "Fortified Plant-Based Milk"}</li>
          <li>2 tbsp ${sub["Chia Seeds"] || "Chia Seeds"}</li>
          <li>2 tbsp ${sub["Nutritional Yeast"] || "Nutritional Yeast"}</li>
          <li>1/4 cup chopped ${sub["Almonds/Almond Butter"] || "Almonds/Almond Butter"}</li>
          <li>Handful of ${sub["Spinach"] || "Spinach"} (or diced tomato)</li>
        </ul>
      `,
      prep: "Mix all ingredients and refrigerate overnight."
    },
    {
      id: "lunch",
      title: "Lentil Power Bowl",
      tag: "Lunch (26g protein)",
      description: "A protein-packed bowl with lentils, rice, and fresh veggies.",
      ingredients: `
        <ul>
          <li>1 cup cooked ${sub["Brown Rice"] || "Brown Rice"}</li>
          <li>1 cup cooked ${sub["Lentils"] || "Lentils"}</li>
          <li>Fresh ${sub["Spinach"] || "Spinach"}, ${sub["Tomatoes"] || "Tomatoes"}, and ${sub["Bell Peppers"] || "Bell Peppers"}</li>
          <li>1/2 ${sub["Avocado"] || "Avocado"} (sliced)</li>
          <li>Sprinkle of ${sub["Nutritional Yeast"] || "Nutritional Yeast"}</li>
        </ul>
      `,
      prep: "Layer ingredients cold or reheat as desired."
    },
    {
      id: "dinner",
      title: "Tofu Stir-Fry with Quinoa",
      tag: "Dinner (28g protein)",
      description: "A flavorful stir-fry with tofu, quinoa, and sautéed veggies.",
      ingredients: `
        <ul>
          <li>200g cubed ${sub["Firm Tofu"] || "Firm Tofu"} (pan-fried)</li>
          <li>1 cup cooked ${sub["Quinoa"] || "Quinoa"}</li>
          <li>Sautéed ${sub["Broccoli"] || "Broccoli"}, ${sub["Bell Peppers"] || "Bell Peppers"}, and onions</li>
          <li>Soy sauce/garlic for seasoning</li>
        </ul>
      `,
      prep: "Batch-cook tofu and vegetables; reheat nightly."
    },
    {
      id: "snack",
      title: "Almond Butter + Fruit",
      tag: "Snack (5g protein)",
      description: "A simple, nutritious snack of apple slices with almond butter.",
      ingredients: `
        <ul>
          <li>Apple slices with 1 tbsp ${sub["Almonds/Almond Butter"] || "Almonds/Almond Butter"}</li>
        </ul>
      `,
      prep: ""
    }
  ];

  // Find the currently selected recipe data
  const currentRecipe = recipesData.find(r => r.id === currentRecipeId) || recipesData[0];

  // Build the recipe list (left column)
  const listHTML = recipesData.map(recipe => `
    <div class="recipe-list-item ${recipe.id === currentRecipe.id ? "selected" : ""}" data-recipe-id="${recipe.id}">
      <h3 class="recipe-list-title">${recipe.title}</h3>
      <span class="recipe-list-tag">${recipe.tag}</span>
      <p class="recipe-list-description">${recipe.description}</p>
    </div>
  `).join('');

  // Build the detail view (right column)
  const detailHTML = `
    <div class="recipe-detail-view">
      <div class="recipe-card">
        <div class="recipe-header">
          <h3 class="recipe-title">${currentRecipe.title} <span class="recipe-tag">(${currentRecipe.tag})</span></h3>
          <button class="print-button" onclick="window.print()">Print Recipe</button>
        </div>
        <div class="recipe-content">
          <div class="recipe-ingredients">
            <h4>Ingredients</h4>
            ${currentRecipe.ingredients}
          </div>
          <div class="recipe-instructions">
            <h4>Prep</h4>
            <p>${currentRecipe.prep}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Set up event listeners for recipe list items
  setTimeout(() => {
    document.querySelectorAll('.recipe-list-item').forEach(item => {
      item.addEventListener('click', function() {
        const id = this.getAttribute('data-recipe-id');
        window.currentRecipeId = id;
        if (window.updateRecipes) window.updateRecipes();
      });
    });
  }, 0);

  return `
    <div class="section-content recipes-section">
      <h2>Recipes</h2>
      <div class="recipes-container" style="display: flex; gap: 1em;">
        <div class="recipe-list" style="flex: 1; overflow-y: auto; max-height: 80vh;">
          ${listHTML}
        </div>
        <div class="recipe-detail" style="flex: 2;">
          ${detailHTML}
        </div>
      </div>
    </div>
  `;
};

export default Recipes;
