import React, { useState } from 'react';

function IngredientsSelector() {
  // List of ingredients
  const [ingredients, setIngredients] = useState(['Sugar', 'Salt', 'Butter', 'Flour', 'Eggs', 'Milk']);

  // List of selected unhealthy ingredients
  const [unhealthyIngredients, setUnhealthyIngredients] = useState([]);

  // Handle checkbox change
  const handleCheckboxChange = (ingredient) => {
    setUnhealthyIngredients(prev => {
      if (prev.includes(ingredient)) {
        return prev.filter(item => item !== ingredient);
      } else {
        return [...prev, ingredient];
      }
    });
  };

  return (
    <div>
      <h2>Select Unhealthy Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <label>
              <input 
                type="checkbox" 
                checked={unhealthyIngredients.includes(ingredient)} 
                onChange={() => handleCheckboxChange(ingredient)} 
              />
              {ingredient}
            </label>
          </li>
        ))}
      </ul>
      <div>
        <h3>Unhealthy Ingredients:</h3>
        <ul>
          {unhealthyIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IngredientsSelector;
