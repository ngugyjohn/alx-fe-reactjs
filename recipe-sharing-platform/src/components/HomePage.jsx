import React, { useState, useEffect } from 'react';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
