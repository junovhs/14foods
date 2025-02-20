import { recipes } from './recipes.js';

let isMetric = false;
let isDarkMode = false;

// Utility Functions
const toggleTheme = () => {
  isDarkMode = !isDarkMode;
  document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  document.querySelector('.theme-toggle').textContent = isDarkMode ? '☀️' : '🌙';
};

const toggleUnits = () => {
  isMetric = !isMetric;
  renderCurrentView();
};

const convertToMetric = (amount, unit) => {
  const value = parseFloat(amount);
  if (isNaN(value)) return amount;
  switch(unit.toLowerCase()) {
    case 'cup':
    case 'cups':
      return `${(value * 237).toFixed(0)}ml`;
    case 'tbsp':
      return `${(value * 15).toFixed(0)}ml`;
    case 'tsp':
      return `${(value * 5).toFixed(0)}ml`;
    case 'oz':
      return `${(value * 28).toFixed(0)}g`;
    case 'lb':
    case 'lbs':
      return `${(value * 454).toFixed(0)}g`;
    case '°f':
      return `${((value - 32) * 5/9).toFixed(0)}°C`;
    default:
      return `${amount}${unit}`;
  }
};

const parseAmount = (token) => {
  const fractionMap = { '¼': 0.25, '½': 0.5, '¾': 0.75, '⅓': 0.333, '⅔': 0.667 };
  if(token.includes('/')) {
    try { return eval(token); } catch(e) { }
  }
  let wholeMatch = token.match(/^\d+(\.\d+)?/);
  let whole = wholeMatch ? parseFloat(wholeMatch[0]) : 0;
  let fractionPart = token.replace(/^\d+(\.\d+)?/, '');
  if(fractionPart in fractionMap){
    return whole + fractionMap[fractionPart];
  }
  if(token in fractionMap) {
    return fractionMap[token];
  }
  return parseFloat(token);
};

const adjustIngredientAmount = (ingredient, multiplier) => {
  const tokens = ingredient.split(' ');
  const amountValue = parseAmount(tokens[0]);
  if(isNaN(amountValue)) return ingredient;
  
  let newAmount = amountValue * multiplier;
  let formattedAmount = Number.isInteger(newAmount) ? newAmount : newAmount.toFixed(2);
  
  const unit = tokens[1] || '';
  const rest = tokens.slice(2).join(' ');
  
  if(isMetric) {
    return `${convertToMetric(formattedAmount, unit)} ${rest}`.trim();
  }
  return `${formattedAmount} ${unit} ${rest}`.trim();
};

// Routing and View Management
const getRecipeFromHash = () => {
  const hash = window.location.hash.slice(1);
  return recipes.find(recipe => recipe.id.toString() === hash);
};

const renderRecipes = () => {
  const grid = document.querySelector('.recipe-grid');
  grid.innerHTML = '';
  recipes.forEach(recipe => {
    grid.appendChild(createRecipeCard(recipe));
  });
};

const createRecipeCard = (recipe) => {
  const card = document.createElement('div');
  card.className = 'recipe-card';
  card.innerHTML = `
    <div class="recipe-card-content">
      <h3>${recipe.title}</h3>
      <p>${recipe.description.substring(0, 60)}...</p>
      <div class="meta-info">
        <span>⏱️ ${recipe.prepTime} + ${recipe.cookTime}</span>
        <span>👥 ${recipe.servings} serving${recipe.servings > 1 ? 's' : ''}</span>
        <span>📊 ${recipe.difficulty}</span>
      </div>
    </div>
  `;
  card.addEventListener('click', () => {
    window.location.hash = recipe.id;
  });
  return card;
};

const renderHomeView = () => {
  document.querySelector('.hero').style.display = 'flex';
  const mainContent = document.querySelector('.main-content');
  mainContent.innerHTML = '<div class="recipe-grid"></div>';
  renderRecipes();
};

const updateServings = (recipe, newServings) => {
  const multiplier = newServings / recipe.servings;
  const ingredientsList = document.querySelector('.ingredients-list');
  recipe.ingredients.forEach((ingredient, index) => {
    const listItem = ingredientsList.children[index];
    const label = listItem.querySelector('label');
    label.textContent = adjustIngredientAmount(ingredient, multiplier);
  });
  
  const nutrition = document.querySelector('.nutrition-info');
  for (const [key, value] of Object.entries(recipe.nutrition)) {
    const element = nutrition.querySelector(`[data-nutrient="${key}"]`);
    if (element) {
      const newValue = (value * multiplier).toFixed(1);
      element.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${newValue}${key === 'calories' ? '' : 'g'}`;
    }
  }
};

const generatePDF = (recipe) => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  // Set font – attempting use of Open Sans here; fallback to Helvetica if not available.
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(12);
  let content = "";
  content += recipe.title + "\n\n";
  content += `By ${recipe.author}\n`;
  content += `Published on ${recipe.publishedDate}\n`;
  content += `Last Updated: ${recipe.lastUpdate}\n`;
  content += `Rating: ${recipe.rating} ★\n`;
  content += `${recipe.commentsCount} Comments\n\n`;
  content += recipe.introduction || recipe.description;
  content += "\n\nIngredients:\n";
  recipe.ingredients.forEach(ing => {
    content += "- " + ing + "\n";
  });
  content += "\nInstructions:\n";
  recipe.instructions.forEach((step, index) => {
    content += `${index+1}. ${step}\n`;
  });
  content += "\nNutrition:\n";
  Object.entries(recipe.nutrition).forEach(([key, val]) => {
    content += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${val}${key === 'calories' ? '' : 'g'}\n`;
  });
  
  const lines = doc.splitTextToSize(content, 180);
  doc.text(lines, 10, 10);
  doc.save(`${recipe.title}.pdf`);
};

const shareRecipe = (recipe) => {
  const shareData = {
    title: recipe.title,
    text: recipe.introduction || recipe.description,
    url: window.location.href
  };
  if(navigator.share) {
    navigator.share(shareData).catch(console.error);
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert("Recipe URL copied to clipboard!");
    });
  }
};

const renderRecipePage = (recipe) => {
  // Hide the hero section when viewing a recipe
  document.querySelector('.hero').style.display = 'none';
  const mainContent = document.querySelector('.main-content');
  mainContent.innerHTML = `
    <article class="recipe-article">
      <div class="recipe-header-container">
        <h1 class="recipe-title">${recipe.title}</h1>
        <div class="recipe-meta-info">
          <p>By ${recipe.author}</p>
          <p>Published on ${recipe.publishedDate}</p>
          <p>Last Updated: ${recipe.lastUpdate}</p>
          <p>Rating: ${recipe.rating} ★</p>
          <p>${recipe.commentsCount} Comments</p>
        </div>
      </div>
      <div class="recipe-intro">
        <p>${recipe.introduction || recipe.description}</p>
      </div>
      <div class="recipe-actions">
        <button class="print-recipe">Print</button>
        <button class="share-recipe">Share</button>
      </div>
      <section class="recipe-details">
        <div class="ingredients-section">
          <h2>Ingredients</h2>
          <ul class="ingredients-list">
            ${recipe.ingredients.map((ingredient, index) => `
              <li class="ingredient-item">
                <input type="checkbox" id="ingredient-${index}">
                <label for="ingredient-${index}">${ingredient}</label>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="instructions-section">
          <h2>Preparation Instructions</h2>
          <ol class="instructions">
            ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
          </ol>
        </div>
        <div class="servings-control">
          <label for="servings">Servings:</label>
          <input type="number" id="servings" min="1" value="${recipe.servings}" style="width:60px;">
        </div>
        <div class="nutrition-section">
          <h2>Nutritional Information</h2>
          <div class="nutrition-info">
            ${Object.entries(recipe.nutrition).map(([key, value]) => `
              <p data-nutrient="${key}">${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}${key === 'calories' ? '' : 'g'}</p>
            `).join('')}
          </div>
        </div>
      </section>
      <section class="about-author">
        <h2>About the Author</h2>
        <div class="author-info">
          <div class="author-avatar">
            <svg width="50" height="50" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" fill="var(--primary-color)"/>
              <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="40">${recipe.author.charAt(0)}</text>
            </svg>
          </div>
          <div class="author-bio">
            <p>${recipe.author} - A passionate recipe creator sharing healthy and delicious recipes.</p>
            <p>
              <a href="#" target="_blank">Twitter</a> |
              <a href="#" target="_blank">Instagram</a>
            </p>
          </div>
        </div>
      </section>
      <section class="comments-section">
        <h2>Comments</h2>
        <script src="https://utteranc.es/client.js"
          repo="your-github-username/your-repo"
          issue-term="title"
          theme="github-light"
          crossorigin="anonymous"
          async>
        </script>
      </section>
    </article>
  `;

  const servingsInput = document.getElementById('servings');
  if(servingsInput) {
    servingsInput.addEventListener('change', (e) => {
      const newServings = parseInt(e.target.value);
      if(newServings > 0) {
        updateServings(recipe, newServings);
      }
    });
  }
  
  const printRecipeButton = document.querySelector('.print-recipe');
  if(printRecipeButton) {
    printRecipeButton.addEventListener('click', () => {
      generatePDF(recipe);
    });
  }
  
  const shareRecipeButton = document.querySelector('.share-recipe');
  if(shareRecipeButton) {
    shareRecipeButton.addEventListener('click', () => {
      shareRecipe(recipe);
    });
  }
};

const renderCurrentView = () => {
  const currentRecipe = getRecipeFromHash();
  if (currentRecipe) {
    renderRecipePage(currentRecipe);
  } else {
    renderHomeView();
  }
};

// Event Listeners
window.addEventListener('hashchange', renderCurrentView);

document.addEventListener('DOMContentLoaded', () => {
  renderCurrentView();
  document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
  document.querySelector('.unit-toggle').addEventListener('click', toggleUnits);
  document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('.recipe-grid').scrollIntoView({ behavior: 'smooth' });
  });
});
