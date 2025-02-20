/* components/IngredientSubstitution.js */

const IngredientSubstitution = () => {
  // Define groups of ingredients by category
  const groups = [
    {
      category: "Grains & Seeds",
      items: [
        {
          name: "Rolled Oats",
          nutritionalBase: "Complex carbs, high fiber, moderate protein, B vitamins, magnesium, iron",
          substitutes: ["Steel-Cut Oats", "Quinoa Flakes", "Rolled Barley", "Rolled Buckwheat", "Rolled Millet"]
        },
        {
          name: "Brown Rice",
          nutritionalBase: "Complex carbs, fiber, some protein and minerals",
          substitutes: ["Quinoa", "Barley", "Bulgur Wheat", "Rolled Millet", "Farro"]
        },
        {
          name: "Quinoa",
          nutritionalBase: "Complete protein, complex carbs, fiber, minerals",
          substitutes: ["Amaranth", "Buckwheat", "Millet", "Teff", "Sorghum"]
        },
        {
          name: "Chia Seeds",
          nutritionalBase: "High in omega‑3s, fiber, and protein; minerals",
          substitutes: ["Ground Flax Seeds", "Hemp Seeds", "Sacha Inchi Seeds", "Perilla Seeds", "Finely Chopped Walnuts"]
        }
      ]
    },
    {
      category: "Plant Proteins & Legumes",
      items: [
        {
          name: "Lentils",
          nutritionalBase: "Excellent plant protein, high in fiber, iron, folate",
          substitutes: ["Chickpeas", "Black Beans", "Kidney Beans", "Split Peas", "Edamame"]
        },
        {
          name: "Firm Tofu",
          nutritionalBase: "Complete plant protein; extra calcium & iron if calcium-set",
          substitutes: ["Tempeh", "Seitan", "Chickpea Tofu", "Mung Bean Tofu", "High‑Protein Bean Curd"]
        }
      ]
    },
    {
      category: "Nuts & Healthy Fats",
      items: [
        {
          name: "Almonds/Almond Butter",
          nutritionalBase: "Monounsaturated fats, protein, vitamin E, magnesium, fiber",
          substitutes: ["Cashews/Cashew Butter", "Walnuts", "Peanuts/Peanut Butter", "Pistachios", "Hazelnuts/Hazelnut Butter"]
        },
        {
          name: "Avocado",
          nutritionalBase: "Rich in monounsaturated fats, fiber, potassium; vitamins E, K, folate",
          substitutes: ["Olives", "Tahini (Sesame Paste)", "Cashew Butter", "Pistachios", "Hazelnuts/Hazelnut Butter"]
        }
      ]
    },
    {
      category: "Vegetables & Greens",
      items: [
        {
          name: "Spinach",
          nutritionalBase: "Rich in vitamins A, C, K, iron, folate; antioxidants",
          substitutes: ["Kale", "Swiss Chard", "Collard Greens", "Beet Greens", "Turnip Greens"]
        },
        {
          name: "Broccoli",
          nutritionalBase: "High in vitamins C & K, fiber, calcium; antioxidants, folate",
          substitutes: ["Cauliflower", "Brussels Sprouts", "Kale", "Red Cabbage", "Bok Choy"]
        },
        {
          name: "Tomatoes",
          nutritionalBase: "High in vitamin C, lycopene, potassium; low calorie",
          substitutes: ["Tomato Paste", "Sun‑Dried Tomatoes", "Watermelon", "Papaya", "Guava"]
        },
        {
          name: "Bell Peppers",
          nutritionalBase: "Very high in vitamin C, vitamin A, antioxidants; crunchy",
          substitutes: ["Shredded Red Cabbage", "Snap Peas", "Cauliflower", "Brussels Sprouts (shredded)", "Shredded Kale"]
        }
      ]
    },
    {
      category: "Fortified Nutrients",
      items: [
        {
          name: "Fortified Plant-Based Milk",
          nutritionalBase: "High in calcium, vitamin D; often fortified with B12 & protein",
          substitutes: ["Fortified Soy Milk", "Fortified Almond Milk", "Fortified Oat Milk", "Fortified Pea Milk", "Fortified Hemp Milk"]
        },
        {
          name: "Nutritional Yeast",
          nutritionalBase: "High in B‑complex vitamins (B12 when fortified), protein, cheesy umami flavor",
          substitutes: ["Fortified Brewer’s Yeast", "Fortified Vegan Cheese Powder", "B12 Supplement + Umami Seasoning", "B12‑Fortified Fermented Soy Seasoning", "Dried Mushroom Powder + B12 Supplement"]
        }
      ]
    }
  ];

  // Define 10 themes (each maps the 14 ingredients to substitutes)
  const themes = {
    "Standard": groups.reduce((acc, group) => {
      group.items.forEach(item => acc[item.name] = item.name);
      return acc;
    }, {}),

    "High Protein": {
      "Rolled Oats": "Quinoa Flakes",
      "Brown Rice": "Quinoa",
      "Chia Seeds": "Hemp Seeds",
      "Almonds/Almond Butter": "Peanuts/Peanut Butter",
      "Nutritional Yeast": "Fortified Brewer’s Yeast",
      "Lentils": "Edamame",
      "Spinach": "Kale",
      "Tomatoes": "Sun‑Dried Tomatoes",
      "Bell Peppers": "Snap Peas",
      "Avocado": "Tahini (Sesame Paste)",
      "Firm Tofu": "Tempeh",
      "Quinoa": "Amaranth",
      "Broccoli": "Brussels Sprouts",
      "Fortified Plant-Based Milk": "Fortified Soy Milk"
    },

    "Low Carb": {
      "Rolled Oats": "Rolled Buckwheat",
      "Brown Rice": "Rolled Millet",
      "Chia Seeds": "Chia Seeds",
      "Almonds/Almond Butter": "Almonds/Almond Butter",
      "Nutritional Yeast": "Nutritional Yeast",
      "Lentils": "Edamame",
      "Spinach": "Spinach",
      "Tomatoes": "Tomato Paste",
      "Bell Peppers": "Shredded Red Cabbage",
      "Avocado": "Avocado",
      "Firm Tofu": "Firm Tofu",
      "Quinoa": "Buckwheat",
      "Broccoli": "Broccoli",
      "Fortified Plant-Based Milk": "Fortified Almond Milk"
    },

    "High Fiber": {
      "Rolled Oats": "Rolled Barley",
      "Brown Rice": "Bulgur Wheat",
      "Chia Seeds": "Chia Seeds",
      "Almonds/Almond Butter": "Almonds/Almond Butter",
      "Nutritional Yeast": "Nutritional Yeast",
      "Lentils": "Lentils",
      "Spinach": "Spinach",
      "Tomatoes": "Guava",
      "Bell Peppers": "Snap Peas",
      "Avocado": "Avocado",
      "Firm Tofu": "Firm Tofu",
      "Quinoa": "Millet",
      "Broccoli": "Brussels Sprouts",
      "Fortified Plant-Based Milk": "Fortified Oat Milk"
    },

    "Budget": {
      "Rolled Oats": "Rolled Oats",
      "Brown Rice": "Brown Rice",
      "Chia Seeds": "Ground Flax Seeds",
      "Almonds/Almond Butter": "Peanuts/Peanut Butter",
      "Nutritional Yeast": "Fortified Brewer’s Yeast",
      "Lentils": "Lentils",
      "Spinach": "Spinach",
      "Tomatoes": "Tomatoes",
      "Bell Peppers": "Bell Peppers",
      "Avocado": "Olives",
      "Firm Tofu": "Firm Tofu",
      "Quinoa": "Buckwheat",
      "Broccoli": "Broccoli",
      "Fortified Plant-Based Milk": "Fortified Almond Milk"
    },

    "Gourmet": {
      "Rolled Oats": "Rolled Buckwheat",
      "Brown Rice": "Farro",
      "Chia Seeds": "Chia Seeds",
      "Almonds/Almond Butter": "Hazelnuts/Hazelnut Butter",
      "Nutritional Yeast": "Fortified Vegan Cheese Powder",
      "Lentils": "Lentils",
      "Spinach": "Swiss Chard",
      "Tomatoes": "Sun‑Dried Tomatoes",
      "Bell Peppers": "Snap Peas",
      "Avocado": "Avocado",
      "Firm Tofu": "Tempeh",
      "Quinoa": "Teff",
      "Broccoli": "Red Cabbage",
      "Fortified Plant-Based Milk": "Fortified Oat Milk"
    },

    "Gluten-Free": {
      "Rolled Oats": "Rolled Oats",
      "Brown Rice": "Brown Rice",
      "Chia Seeds": "Chia Seeds",
      "Almonds/Almond Butter": "Almonds/Almond Butter",
      "Nutritional Yeast": "Nutritional Yeast",
      "Lentils": "Lentils",
      "Spinach": "Spinach",
      "Tomatoes": "Tomatoes",
      "Bell Peppers": "Bell Peppers",
      "Avocado": "Avocado",
      "Firm Tofu": "Firm Tofu",
      "Quinoa": "Buckwheat",
      "Broccoli": "Broccoli",
      "Fortified Plant-Based Milk": "Fortified Almond Milk"
    },

    "Antioxidant Boost": {
      "Rolled Oats": "Rolled Buckwheat",
      "Brown Rice": "Bulgur Wheat",
      "Chia Seeds": "Chia Seeds",
      "Almonds/Almond Butter": "Walnuts",
      "Nutritional Yeast": "Nutritional Yeast",
      "Lentils": "Black Beans",
      "Spinach": "Spinach",
      "Tomatoes": "Guava",
      "Bell Peppers": "Shredded Red Cabbage",
      "Avocado": "Avocado",
      "Firm Tofu": "Firm Tofu",
      "Quinoa": "Buckwheat",
      "Broccoli": "Red Cabbage",
      "Fortified Plant-Based Milk": "Fortified Almond Milk"
    },

    "Mineral Rich": {
      "Rolled Oats": "Rolled Oats",
      "Brown Rice": "Farro",
      "Chia Seeds": "Chia Seeds",
      "Almonds/Almond Butter": "Almonds/Almond Butter",
      "Nutritional Yeast": "Nutritional Yeast",
      "Lentils": "Lentils",
      "Spinach": "Spinach",
      "Tomatoes": "Papaya",
      "Bell Peppers": "Bell Peppers",
      "Avocado": "Avocado",
      "Firm Tofu": "Firm Tofu",
      "Quinoa": "Amaranth",
      "Broccoli": "Brussels Sprouts",
      "Fortified Plant-Based Milk": "Fortified Soy Milk"
    },

    "Paleo-Inspired": {
      "Rolled Oats": "Steel-Cut Oats",
      "Brown Rice": "Rolled Millet",
      "Chia Seeds": "Chia Seeds",
      "Almonds/Almond Butter": "Almonds/Almond Butter",
      "Nutritional Yeast": "Nutritional Yeast",
      "Lentils": "Lentils",
      "Spinach": "Spinach",
      "Tomatoes": "Tomatoes",
      "Bell Peppers": "Bell Peppers",
      "Avocado": "Avocado",
      "Firm Tofu": "Tempeh",
      "Quinoa": "Buckwheat",
      "Broccoli": "Broccoli",
      "Fortified Plant-Based Milk": "Fortified Almond Milk"
    }
  };

  // Build HTML for theme buttons
  const themeButtonsHTML = Object.keys(themes)
    .map(theme => `<button class="theme-button ${theme === "Standard" ? "active" : ""}" data-theme="${theme}">${theme}</button>`)
    .join('');

  // Render all groups as side-by-side columns (5 columns total)
  const groupsHTML = groups.map(group => {
    const itemsHTML = group.items.map(item => {
      const optionsHTML = [item.name, ...item.substitutes]
        .map(opt => `<option value="${opt}" ${window.substitutions[item.name] === opt ? "selected" : ""}>${opt}</option>`)
        .join('');
      return `
        <div class="swap-item" data-ingredient="${item.name}">
          <select class="ingredient-select">${optionsHTML}</select>
          <div class="ingredient-details"><small>${item.nutritionalBase}</small></div>
        </div>
      `;
    }).join('');
    return `
      <div class="ingredient-group-column">
        <h3 class="group-title">${group.category}</h3>
        ${itemsHTML}
      </div>
    `;
  }).join('');

  const html = `
    <div class="section-content">
      <h2>Ingredient Substitution: Tailor Your Plan</h2>
      <p>Choose a theme below, then adjust individual ingredients as needed.</p>
      <div class="substitution-themes">${themeButtonsHTML}</div>
      <div class="ingredient-groups-row">
        ${groupsHTML}
      </div>
    </div>
  `;

  // Set up event listeners
  setTimeout(() => {
    // Theme button handling
    document.querySelectorAll('.theme-button').forEach(btn => {
      btn.addEventListener('click', function() {
        const selectedTheme = this.getAttribute('data-theme');
        document.querySelectorAll('.theme-button').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const themeMapping = themes[selectedTheme];
        Object.keys(themeMapping).forEach(key => {
          window.substitutions[key] = themeMapping[key];
        });
        // Update all dropdowns
        document.querySelectorAll('.swap-item').forEach(item => {
          const ingName = item.getAttribute('data-ingredient');
          item.querySelector('select').value = window.substitutions[ingName];
        });
        if (window.updateRecipes) window.updateRecipes();
      });
    });
    // Individual dropdown handling
    document.querySelectorAll('.swap-item select').forEach(selectEl => {
      selectEl.addEventListener('change', function() {
        const parent = this.closest('.swap-item');
        const ingName = parent.getAttribute('data-ingredient');
        window.substitutions[ingName] = this.value;
        if (window.updateRecipes) window.updateRecipes();
      });
    });
  }, 0);

  return html;
};

export default IngredientSubstitution;
