import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/recipe');
        setRecipes( data);
      } catch (error) {
        alert('No se pudo obtener la lista de recetas');
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="App">
      <h1>Henry Food</h1>
      <div>
        {recipes.map(({ name }) => (
          <div key={name}>{name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
