import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams(); // Extract recipe ID from the route
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe data from a local JSON file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8">{recipe.title}</h1>
        <img className="w-full h-64 object-cover mb-4 shadow-md" src={recipe.image} alt={recipe.title} />
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc pl-5 mb-8">
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700 mb-2">{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
